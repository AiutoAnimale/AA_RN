import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from '../../../assets/icon/Back';
import onPostComment from "../../../apis/PostComment";

const DataPage = ({navigation, route}) => {
    const [ isData, setIsData ] = useState(false);
    const [ comment, setComment ] = useState();
    const data = route.params.data;

    useEffect(()=>{
        console.log(comment)
    },[comment])

    const onClickBack = () => {
        navigation.goBack()
    }

    const onClickPost = async () => {
        const data = await onPostComment(comment);
        if(data) {
            console.log(data)
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={onClickBack}>
                        <Back />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={Styles.main}>
                        <View style={Styles.body}>
                            <CustomText style={Styles.name}>{data.nickname}</CustomText>
                            <Image style={Styles.img} />
                            <CustomText style={Styles.title}>{data.title}</CustomText>
                            <CustomText style={Styles.data}>
                                {data.body}
                            </CustomText>
                        </View>
                        <View style={Styles.gap}></View>
                        <View style={Styles.body}>
                            <CustomText style={Styles.title}>댓글</CustomText>
                            <View style={Styles.btnContainer}>
                                <TextInput style={Styles.input} placeholder='댓글 작성하기' onSubmitEditing={(event) => setComment(event.nativeEvent.text)}/>
                                <TouchableOpacity style={Styles.btn} onPress={onClickPost}>
                                    <CustomText style={Styles.btnFont}>등록</CustomText>
                                </TouchableOpacity>
                            </View>
                            {isData ? 
                            (
                                <>
                                    <View style={Styles.commentContainer}>
                                        <Image style={Styles.commentImg} />
                                        <View style={Styles.comment}>
                                            <CustomText style={[Styles.name, {fontWeight: '700'}]}>이름</CustomText>
                                            <CustomText style={Styles.data}>
                                                이 사진은 이~븐하게 찍히지 않았네요 ~ {'\n'}
                                                당신의 카메라 화질은 좀 부족한거 같아요{'\n'}
                                                카메라는 보류입니다.{'\n'}
                                                하지만 강아지는 너무 귀엽고?
                                            </CustomText>
                                        </View>
                                    </View>
                                    <View style={Styles.commentContainer}>
                                        <Image style={Styles.commentImg} />
                                        <View style={Styles.comment}>
                                            <CustomText style={[Styles.name, {fontWeight: '700'}]}>이름</CustomText>
                                            <CustomText style={Styles.data}>
                                                이 사진은 이~븐하게 찍히지 않았네요 ~ {'\n'}
                                                당신의 카메라 화질은 좀 부족한거 같아요{'\n'}
                                                카메라는 보류입니다.{'\n'}
                                                하지만 강아지는 너무 귀엽고?
                                            </CustomText>
                                        </View>
                                    </View>
                                </>
                                
                            ) : (
                                <CustomText style={Styles.noComment}>댓글이 없습니다.</CustomText>
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
        alignItems: 'center',
    },
    main: {
        width: constants.width,
        alignItems: 'center'
    },
    header: {
        width: constants.width,
        height: constants.height/15,
        justifyContent:'flex-end',
        paddingBottom: 10,
        paddingLeft: 15,
    },
    body: {
        borderTopColor: color.Gray[1],
        borderTopWidth: 0.5,
        width: constants.width/1.1,
        paddingTop: 20,
        paddingBottom: 20,
        rowGap: 20,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: color.Black
    },
    img: {
        width: 340,
        height: 340,
        backgroundColor: color.Black,
        borderRadius: 15
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: color.Black
    },
    data: {
        fontSize: 14,
        fontWeight: '500',
        color: color.Black
    },
    gap: {
        width: constants.width,
        height: 30,
        backgroundColor: color.Gray[0],
    },
    input: {
        width: constants.width/1.4,
        height: constants.height/20,
        borderRadius: 10,
        backgroundColor: color.Gray[0],
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: color.Gray[1],
    },
    btn: {
        width: constants.height/20,
        height: constants.height/20,
        backgroundColor: color.Gray[0],
        borderColor: color.Gray[1],
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnFont: {
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: '500',
        color: color.Gray[8]
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    noComment: {
        height: constants.height/10,
        fontSize: 16,
        fontWeight: '600',
        color: color.Gray[7],
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    commentContainer: {
        width: constants.width/1.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10
    },
    commentImg: {
        width: 30,
        height: 30,
        backgroundColor: color.Black,
        borderRadius: 10,
    },
    comment: {
        rowGap: 20,
    }
})

export default DataPage;