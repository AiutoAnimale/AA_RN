import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from '../../../assets/icon/Back';

const DataPage = ({navigation}) => {
    const [ isData, setIsData ] = useState(true);

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
                </View>
                <ScrollView>
                    <View style={Styles.main}>
                        <View style={Styles.body}>
                            <CustomText style={Styles.name}>이름</CustomText>
                            <Image style={Styles.img} />
                            <CustomText style={Styles.title}>팔 뻗는것봐 너무 귀여워!</CustomText>
                            <CustomText style={Styles.data}>
                                안녕하세요, 여러분! 🐶💕{'\n'}
                                오늘 아침, 우리 강아지가 팔을 쭉 뻗는 모습이 너무 귀여워서 사진을 찍어봤어요!{'\n'}
                                이 모습은 마치 "안아줘!"라고 말하는 것 같아요. 😍{'\n'}
                                이런 작은 순간들이 하루를 더욱 특별하게 만들어주네요.{'\n'}
                                여러분의 반려동물도 이런 사랑스러운 순간이 있나요?{'\n'}
                                댓글로 공유해주세요! 🐾{'\n'}
                                행복한 하루 보내세요!
                            </CustomText>
                        </View>
                        <View style={Styles.gap}></View>
                        <View style={Styles.body}>
                            <CustomText style={Styles.title}>댓글</CustomText>
                            <View style={Styles.btnContainer}>
                                <TextInput style={Styles.input} placeholder='댓글 작성하기' />
                                <TouchableOpacity style={Styles.btn}>
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