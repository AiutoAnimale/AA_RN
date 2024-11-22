import React, { useEffect, useState } from 'react';
import { View, Image, Keyboard, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import CustomText from "../../styles/customText";

import Header from "../../components/Header";
import Q from "../../assets/icon/Q";

const HomePage = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <Header />
            <Image style={Styles.img} source={require('../../assets/image/weather.png')} />
            <CustomText style={Styles.tag}>최저 24° | 최고 33° </CustomText>
            <CustomText style={Styles.Top}>성남시 분당구의</CustomText>
            <CustomText style={Styles.Bottom}>오늘 날씨는 맑습니다</CustomText>
            <CustomText style={Styles.temp}>24°</CustomText>
            <CustomText style={Styles.data}>외출하기 좋은 날이에요!</CustomText>
            <View style={Styles.dataContainer}>
                <View style={Styles.quizText}>
                    <Q />
                    <CustomText style={Styles.quiz}>오늘의 문제</CustomText>
                </View>
                <CustomText style={Styles.quizLight}>문제를 풀고 레벨을 올려보세요!</CustomText>
                <CustomText style={Styles.q}>다음 중 한국에서 반려동물 유기 문제와 관련하여 가장 정확한 설명은?</CustomText>
                <View style={Styles.btnContainer}>
                    <TouchableOpacity style={Styles.btn}>
                        <CustomText style={Styles.btnText}>2019년 기준 약 1만 5천마리이다.</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <CustomText style={Styles.btnText}>2019년 기준 약 1만 5천마리이다.</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <CustomText style={Styles.btnText}>2019년 기준 약 1만 5천마리이다.</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <CustomText style={Styles.btnText}>2019년 기준 약 1만 5천마리이다.</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    img: {
        width: constants.width,
        height: constants.height/4.5
    },
    Top: {
        position: 'absolute',
        top: constants.height/8,
        left: constants.width/15,
        fontSize: 20,
        fontWeight: '700',
        color: color.White
    },
    Bottom: {
        position: 'absolute',
        top: constants.height/6.5,
        left: constants.width/15,
        fontSize: 20,
        fontWeight: '700',
        color: color.White
    },
    tag: {
        position: 'absolute',
        top: constants.height/12,
        left: constants.width/15,
        fontSize: 12,
        color: color.Gray[8],
        backgroundColor: color.White,
        borderRadius: 6,
        width: constants.width/3.5,
        height: constants.height/32,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    temp: {
        position: 'absolute',
        top: constants.height/8,
        left: constants.width/1.5,
        fontSize: 50,
        color: color.White
    },
    data: {
        position: 'absolute',
        top: constants.height/5,
        left: constants.width/15,
        fontSize: 14,
        color: color.White
    },
    dataContainer: {
        width: constants.width/1.1,
        height: constants.height/2,
        padding: 10,
        paddingTop: 30,
        rowGap: 10,
    },
    quizText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    quiz: {
        fontSize: 18,
        fontWeight: '700',
    },
    quizLight: {
        fontSize: 13,
        color: color.Gray[8],
    },
    q: {
        fontSize: 16,
        fontWeight: '600',
        color: color.Black
    },
    btn: {
        width: constants.width/1.2,
        height: constants.height/17,
        borderWidth: 1,
        borderColor: color.Gray[2],
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    btnText: {
        color: color.Gray[6],
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    btnContainer: {
        marginTop: 30,
        rowGap: 15
    }
})

export default HomePage;