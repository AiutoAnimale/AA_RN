import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from "../../../assets/icon/Back";

const AlramPage = ({navigation}) => {

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
            <View style={Styles.body}>
                <CustomText style={Styles.title}>편의시설 정보 알리미</CustomText>
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
        alignItems:'center',
        rowGap: 30,
    },
    header: {
        width: constants.width,
        height: constants.height/15,
        justifyContent:'flex-end',
        paddingBottom: 10,
        paddingLeft: 15,
    },
    body:{
        width: constants.width/1.1,
        rowGap: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: color.Black
    },
})

export default AlramPage;