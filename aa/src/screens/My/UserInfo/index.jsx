import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from "../../../assets/icon/Back";

const UserInfoPage = ({navigation}) => {

    const onClickBack = () => {
        navigation.goBack()
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={onClickBack}>
                    <Back />
                </TouchableOpacity>
            </View>
            <View style={Styles.option}>
                <ImageBackground style={Styles.imgContainer} source={require('../../../assets/image/Level.png')}>
                    <CustomText style={Styles.level}>LEVEL 1</CustomText>
                </ImageBackground>
                <View></View>
            </View>
            <View style={Styles.option}>
                <CustomText style={Styles.title}>닉네임</CustomText>
                <CustomText style={Styles.optionText}>코코</CustomText>
            </View>
            <View style={Styles.option}>
                <CustomText style={Styles.title}>아이디</CustomText>
                <CustomText style={Styles.optionText}>asdfasdf</CustomText>
            </View>
            <View style={Styles.option}>
                <CustomText style={Styles.title}>비밀번호</CustomText>
                <CustomText style={Styles.optionText}>⦁⦁⦁⦁⦁⦁⦁⦁⦁⦁</CustomText>
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
        rowGap: 30,
    },
    header: {
        width: constants.width,
        height: constants.height/15,
        justifyContent:'flex-end',
        paddingBottom: 10,
        paddingLeft: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: color.Gray[5],
        marginBottom: 10,
    },
    option: {
        width: constants.width / 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    optionText: {
        fontSize: 16,
        color: color.Black,
        fontWeight: '700',
    },
    imgContainer: {
        width: 131.58,
        height: 33.92,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    level: {
        fontSize: 25,
        fontWeight: '500',
        color: color.White,
        textShadowColor: color.Orange[8],
        textShadowOffset: 0.69,
    }
})

export default UserInfoPage;