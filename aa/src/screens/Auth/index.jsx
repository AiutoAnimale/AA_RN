import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import CustomText from "../../styles/customText";

import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage = ({navigation}) => {
    const [ pwState, setPwState ] = useState(true);
    const [ btnState, setBtnState ] = useState(false);

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.paddingContainer}>
                    <CustomText style={Styles.stateText}>로그인하기</CustomText>
                    <View style={Styles.inputContainer}>
                        <Input text={"아이디"} state={'text'} innerText={'아이디를 입력해주세요'} />
                        <Input text={"비밀번호"} state={'password'} innerText={'비밀번호를 입력해주세요'} pwState={pwState} onPress={() => setPwState(!pwState)} />
                        <View style={Styles.margin}></View>
                    </View>
                    <Button innerText={'로그인하기'} state={btnState} />
                </View>
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
        justifyContent: 'center',
    },
    paddingContainer: {
        width: constants.width/1.2,
        height: constants.height/1.2,
        display: 'flex',
        justifyContent: 'space-around',
    },
    stateText: {
        fontSize: 28,
        fontWeight: '700',
        color: color.Black,
    },
    inputContainer: {
        height: constants.height/3.5,
        display: 'flex',
        justifyContent: 'space-around'
    },
    margin: {
        height: constants.height/6
    }
})

export default LoginPage;