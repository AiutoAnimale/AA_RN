import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView } from "react-native";
import CustomText from "../../../styles/customText";
import * as DocumentPicker from 'expo-document-picker';
import RNPickerSelect from 'react-native-picker-select';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";

import ImageIcon from "../../../assets/icon/ImageIcon";
import Back from '../../../assets/icon/Back';

import onPostList from '../../../apis/PostList';
import onCommunityPostImage from "../../../apis/PostImg";
import onGetUser from "../../../apis/GetUserInfo";

const CreatePage = ({navigation}) => {
    const [ postData, setPostData ] = useState({
        nickname: "",
        title: "",
        body: "",
        tag: "",
        emergency: "0"
    });
    const [ postState, setPostState ] = useState(false);
    const [imageData, setImageData] = useState();
    const formData = new FormData();
    const [ userData, setUserData ] = useState();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const data = await onGetUser();
        if(data) {
            setUserData(data);
        }
    }

    useEffect(()=>{
        if(userData) {
            console.log(userData.nickname);
            setPostData({ ...postData, nickname: userData.nickname });
        }
    }, [userData])

    const onClickCreate = async () => {
        if(postData.tag == '실종') {
            setPostData({ ...postData, emergency: "1" });
        }

        const data = await onPostList(postData);
        if(data) {
            console.log(data);
            onImageUpload(data);
        }
    }

    const onClickEdit = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
            });

            setImageData(result.assets[0]);
        } catch (err) {
        }
    }

    const onImageUpload = async ( id ) => {
        const data = {
            uri: imageData.uri,
            type: imageData.mimeType,
            name: imageData.name,
        }

        if(imageData) {
            formData.append("image", data);
        } else {
            formData.append("image", "");
        }

        console.log('image upload')

        try {
            const data = await onCommunityPostImage(formData, id);

            if(data) {
                navigation.navigate("CommunityMainPage", { screen: 'CommunityMainPage' });
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        if(postData.title.length >= 1 && postData.title.length <= 25) {
            if(postData.body.length >= 1 && postData.body.length <= 2000) {
                setPostState(true);
            }
        }
    }, [postData]);

    const onClickBack = () => {
        navigation.goBack()
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={onClickBack}>
                        <Back />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClickCreate} style={[Styles.btn, {backgroundColor: postState ? color.Orange[4] : color.Gray[0]}]}>
                        <CustomText style={[Styles.btnFont, {color: postState ? color.White : color.Gray[8]}]}>생성</CustomText>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={Styles.inputContainer}>
                        <TextInput
                            placeholder="제목을 작성해주세요"
                            placeholderTextColor={color.Gray[3]}
                            style={Styles.input}
                            value={postData.title}
                            onChangeText={(text) => setPostData({ ...postData, title: text })}
                        />
                    </View>
                    <View>
                        <TextInput
                            multiline={true}
                            style={Styles.textarea}
                            maxLength={500}
                            placeholder={`커뮤니티 게시글 작성 시 유의사항\n\nAA 실종 태그는 실종된 아이들을 위한 것으로\n무분별하게 사용 시 운영자의 제재를 받을 수 있습니다.`}
                            placeholderTextColor={color.Gray[3]}
                            textAlignVertical="top"
                            value={postData.content}
                            onChangeText={(text) => setPostData({ ...postData, body: text })}
                        />
                    </View>
                    <View style={Styles.fontContainer}>
                        <CustomText style={Styles.boldText}>태그</CustomText>
                        <RNPickerSelect
                            onValueChange={(value) => setPostData({ ...postData, tag: value })}
                            items={[
                                { label: '일상', value: '일상' },
                                { label: '실종', value: '실종' },
                            ]}
                            style={{
                                inputIOS: Styles.picker,
                                inputAndroid: Styles.picker,
                            }}
                            value={postData.tag}
                            placeholder={{
                                label: "태그를 선택하세요",
                                value: null,
                            }}
                        />
                    </View>
                    <View style={Styles.fontContainer}>
                        <CustomText style={Styles.boldText}>이미지</CustomText>
                        <CustomText style={Styles.text}>업로드된 이미지를 다시 클릭하면 삭제할 수 있습니다.</CustomText>
                        <View style={Styles.ImageContainer}>
                            <TouchableOpacity style={Styles.image} onPress={() => onClickEdit()}>
                                <ImageIcon />
                            </TouchableOpacity>
                            {imageData ? (
                                    <TouchableOpacity onPress={() => setImageData(null)}>
                                        <Image style={Styles.image} source={{uri: imageData.uri}} />
                                    </TouchableOpacity>
                                ) : (
                                    undefined
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        display: 'flex',
        alignItems: 'center',
        rowGap: 10,
    },
    header: {
        width: constants.width,
        height: constants.height/13,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15,
    },
    inputContainer: {
        width: constants.width,
        height: constants.height/15,
        borderBottomWidth: 1,
        borderBottomColor: color.Gray[0],
        borderTopWidth: 1,
        borderTopColor: color.Gray[0],
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    input: {
        fontSize: 18,
    },
    textarea: {
      fontSize: 16,
      color: color.Black,
      width: constants.width,
      height: constants.height/2.5,
      padding: 20,
      backgroundColor: color.White,
    },
    fontContainer: {
        width: constants.width,
        padding: 20,
    },
    boldText: {
        fontSize: 16,
        color: color.Black,
        fontWeight: '600',
    },
    text: {
        fontSize: 12,
        color: color.Gray[4],
        fontWeight: '500',
    },
    picker: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: color.Gray[0],
        borderRadius: 8,
        color: color.Black,
        paddingRight: 30,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 40,
        borderWidth: 2,
        borderColor: color.Gray[3],
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    btn: {
        width: constants.width/8,
        height: constants.height/25,
        borderRadius: 10,
        backgroundColor: color.Orange[4],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnFont: {
        fontSize: 15,
        fontWeight: '600',
        color: color.White
    }
  });

export default CreatePage;
