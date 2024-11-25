import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from "../../../assets/icon/Back";
import onGetUser from '../../../apis/GetUserInfo';

const PetInfoPage = ({navigation}) => {
    const [ userData, setUserData ] = useState();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const data = await onGetUser();
        if(data) {
            console.log(data);
            setUserData(data);
        }
    }

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
                <CustomText style={Styles.title}>이름</CustomText>
                <CustomText style={Styles.optionText}>{userData ? userData.pet_name : undefined}</CustomText>
            </View>
            <View style={Styles.option}>
                <CustomText style={Styles.title}>세부 종</CustomText>
                <CustomText style={Styles.optionText}>{userData ? userData.species : undefined}</CustomText>
            </View>
            <View style={Styles.option}>
                <CustomText style={Styles.title}>생년월일</CustomText>
                <CustomText style={Styles.optionText}>{userData ? userData.pet_birth : undefined}</CustomText>
            </View>
            <View style={Styles.option}>
                <CustomText style={Styles.title}>성별</CustomText>
                <CustomText style={Styles.optionText}>{userData && userData.pet_sex == '0' ? '여아' : '남아'}</CustomText>
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
})

export default PetInfoPage;