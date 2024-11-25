import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import CustomText from "../../styles/customText";

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

import onSignup from "../../apis/Signup";

const SignupPage = ({navigation}) => {
    const [ pwState, setPwState ] = useState(true);
    const [ btnState, setBtnState ] = useState(false);
    const [ sexState, setSexState ] = useState();
    const [ signupData, setSignupData ] = useState({
		userid: "",
		userpw: "",
		nickname: "",
		pet_name: "",
		pet_sex: "",
		species: "",
		pet_birth: "",
		region: "",
    });

    useEffect(()=> {
        if(signupData.userid.length >= 1 && signupData.userid.length <= 50) {
            if(signupData.userpw.length >= 1 && signupData.userpw.length <= 50) {
                if(signupData.nickname.length >= 1 && signupData.nickname.length <= 50) {
                    setBtnState(true);
                }
            }
        }
    },[signupData]);

    const handleInputChange = (text, field) => {
        setSignupData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    useEffect(() => {
        if(sexState == '남아') {
            handleInputChange("1", "pet_sex")
        } else if(sexState == '여아') {
            handleInputChange("0", "pet_sex")
        }
    }, [sexState])

    const onClickSignup = async () => {
        const signupState = await onSignup(signupData);
        if(signupState) {
            navigation.navigate("LoginPage", { screen: 'LoginPage'});
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={Styles.container}>
                    <View style={Styles.paddingContainer}>
                        <CustomText style={Styles.stateText}>회원가입하기</CustomText>
                        <View style={Styles.inputContainer}>
                            <Input text={"아이디"} state={'text'} innerText={'아이디를 입력해주세요'} onGetInText={(text) => handleInputChange(text, "userid")} />
                            <Input text={"비밀번호"} state={'password'} innerText={'비밀번호를 입력해주세요'} pwState={pwState} onPress={() => setPwState(!pwState)} onGetInText={(text) => handleInputChange(text, "userpw")} />
                            <Input text={"닉네임"} state={'text'} innerText={'닉네임을 입력해주세요'} onGetInText={(text) => handleInputChange(text, "nickname")} />
                            <Input text={"반려동물 이름"} state={'text'} innerText={'반려동물 이름을 입력해주세요'} onGetInText={(text) => handleInputChange(text, "pet_name")}/>
                            <Input text={"상세 종"} state={'text'} innerText={'상세 종을 입력해주세요'} onGetInText={(text) => handleInputChange(text, "species")}/>
                            <View style={Styles.textConatiner}>
                                <CustomText style={Styles.text}>반려동물 성별</CustomText>
                                <View style={Styles.btnContainer}>
                                    <Select innerText={'여아'} state={sexState} onPress={() => setSexState('여아')} />
                                    <Select innerText={'남아'} state={sexState} onPress={() => setSexState('남아')} />
                                </View>
                            </View>
                            <Input text={"생년월일"} state={'text'} innerText={'반려동물 생년월일을 입력해주세요'} onGetInText={(text) => handleInputChange(text, "pet_birth")}/>
                            <Input text={"거주 지역"} state={'text'} innerText={'거주 지역을 입력해주세요'} onGetInText={(text) => handleInputChange(text, "region")}/>
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