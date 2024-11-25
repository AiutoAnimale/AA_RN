import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import CustomText from "../../styles/customText";

import Input from '../../components/Input';
import Button from '../../components/Button';

import onLogin from "../../apis/Login";

const LoginPage = ({navigation}) => {
    const [ pwState, setPwState ] = useState(true);
    const [ btnState, setBtnState ] = useState(false);
    const [ loginData, setLoginData ] = useState({
		userid: "",
		userpw: ""
    });

    useEffect(()=> {
        if(loginData.userid.length >= 5 && loginData.userid.length <= 24) {
            if(loginData.userpw.length >= 5 && loginData.userpw.length <= 40) {
                setBtnState(true);
            }
        }
    },[loginData]);

    const handleInputChange = (text, field) => {
        setLoginData(prevData => ({
          ...prevData,
          [field]: text
        }));
    };

    const onClickLogin = async () => {
        const loginState = await onLogin(loginData);
        if(loginState) {
            navigation.navigate("MainScreen", { screen: 'MainScreen'});
        }
    }

    const onClickSignup = () => {
        navigation.navigate("SignupPage", { screen: 'SignupPage'});
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.paddingContainer}>
                    <CustomText style={Styles.stateText}>로그인하기</CustomText>
                    <View style={Styles.inputContainer}>
                        <Input text={"아이디"} state={'text'} innerText={'아이디를 입력해주세요'} onGetInText={(text) => handleInputChange(text, "userid")} />
                        <Input text={"비밀번호"} state={'password'} innerText={'비밀번호를 입력해주세요'} pwState={pwState} onPress={() => setPwState(!pwState)} onGetInText={(text) => handleInputChange(text, "userpw")} />
                        <View style={Styles.margin}></View>
                    </View>
                    <View style={Styles.btnContainer}>
                        <Button innerText={'로그인하기'} state={btnState} onPress={onClickLogin}/>
                        <TouchableOpacity onPress={onClickSignup}>
                            <CustomText style={Styles.signup}>회원가입 하러가기</CustomText>
                        </TouchableOpacity>
                    </View>
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
    },
    signup: {
        fontSize: 12,
        fontWeight: '500',
        color: color.Black,
        width: constants.width/1.2,
        textAlign: 'center',
    },
    btnContainer: {
        display: 'flex',
        rowGap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LoginPage;