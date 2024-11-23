import React, { useEffect, useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import PetActive from "../../../assets/icon/PetActive";
import PetAlram from "../../../assets/icon/PetAlram";

const MainPage = ({navigation}) => {

    const onClickActive = () => {
        navigation.navigate("ActivePage", { screen: 'ActivePage'});
    }

    const onClickAlram = () => {
        navigation.navigate("AlramPage", { screen: 'AlramPage'});
    }

    return(
        <View style={Styles.container}>
            <View>
                <CustomText style={Styles.title}>지식</CustomText>
                <TouchableOpacity style={Styles.option} onPress={onClickActive}>
                    <PetActive />
                    <CustomText style={Styles.optionText}>반려동물 행동 요령</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.option} onPress={onClickAlram}>
                    <PetAlram />
                    <CustomText style={Styles.optionText}>편의시설 정보 알리미</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        paddingTop: 100,
        paddingLeft: 25,
        backgroundColor: color.White,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        rowGap: 40,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: color.Gray[5],
        marginBottom: 10,
    },
    option: {
        marginTop: 15,
        width: constants.width/1.15,
        height: constants.height/13,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: color.Gray[0],
        borderRadius: 10
    },
    optionText: {
        fontSize: 16,
        color: color.Black,
        marginLeft: 20,
    },
})

export default MainPage;