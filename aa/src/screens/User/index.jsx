import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import CustomText from "../../styles/customText";

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

const SignupPage = ({navigation}) => {
    const [ pwState, setPwState ] = useState(true);
    const [ btnState, setBtnState ] = useState(false);
    const [ sexState, setSexState ] = useState();

    const onClickSignup = () => {
        navigation.navigate("LoginPage", { screen: 'LoginPage'});
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={Styles.container}>
                    <View style={Styles.paddingContainer}>
                        <CustomText style={Styles.stateText}>회원가입하기</CustomText>
                        <View style={Styles.inputContainer}>
                            <Input text={"아이디"} state={'text'} innerText={'아이디를 입력해주세요'} />
                            <Input text={"비밀번호"} state={'password'} innerText={'비밀번호를 입력해주세요'} pwState={pwState} onPress={() => setPwState(!pwState)} />
                            <Input text={"닉네임"} state={'text'} innerText={'닉네임을 입력해주세요'} />
                            <Input text={"반려동물 이름"} state={'text'} innerText={'반려동물 이름을 입력해주세요'} />
                            <Input text={"상세 종"} state={'text'} innerText={'상세 종을 입력해주세요'} />
                            <View style={Styles.textConatiner}>
                                <CustomText style={Styles.text}>반려동물 성별</CustomText>
                                <View style={Styles.btnContainer}>
                                    <Select innerText={'여아'} state={sexState} onPress={() => setSexState('여아')} />
                                    <Select innerText={'남아'} state={sexState} onPress={() => setSexState('남아')} />
                                </View>
                            </View>
                            <Input text={"생년월일"} state={'text'} innerText={'반려동물 생년월일을 입력해주세요'} />
                            <Input text={"거주 지역"} state={'text'} innerText={'거주 지역을 입력해주세요'} />
                            <View style={Styles.margin}></View>
                        </View>
                        <Button innerText={'회원가입하기'} state={btnState} onPress={onClickSignup} />
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height*1.45,
        backgroundColor: color.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paddingContainer: {
        width: constants.width/1.2,
        height: constants.height*1.35,
        display: 'flex',
        justifyContent: 'space-around',
    },
    stateText: {
        fontSize: 28,
        fontWeight: '700',
        color: color.Black,
    },
    inputContainer: {
        height: constants.height*1.2,
        display: 'flex',
        justifyContent: 'space-around'
    },
    margin: {
        height: constants.height/10
    },
    btnContainer: {
        width: constants.width/1.2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: color.Black,
    },
    textConatiner: {
        rowGap: 10,
        display: 'flex',
    }
})

export default SignupPage;