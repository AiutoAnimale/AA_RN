import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../../styles/customText";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import ViewPwShow from "../../assets/icon/ViewPwShow";
import ViewPw from "../../assets/icon/ViewPw";

const Input = ( props ) => {
    const [ text, setText ] = useState('');

    useEffect(() => {
        props.onGetInText(text);
      }, [text]);

    return(
        <View style={Styles.inputContainer}>
            <CustomText style={Styles.stateText}>{props.text}</CustomText>
            {props.state == 'password' ? (
                <View style={Styles.pwConatiner}>
                    <TextInput style={Styles.pwInput} placeholder={props.innerText} secureTextEntry={props.pwState} onChangeText={(innerText) => setText(innerText)}></TextInput>
                    <TouchableOpacity style={Styles.btn} onPress={props.onPress}>
                        {props.pwState == false ? <ViewPwShow /> : <ViewPw />}
                    </TouchableOpacity>
                </View>
            ) : (
                <TextInput style={Styles.container} placeholder={props.innerText} secureTextEntry={false} onChangeText={(innerText) => setText(innerText)}></TextInput>
            )}
            <Text style={Styles.error}>{props.error}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    inputContainer: {
        rowGap: 10,
    },
    container: {
        width: constants.width/1.2,
        height: constants.height/18,
        backgroundColor: color.Gray[0],
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    stateText: {
        fontSize: 15,
        fontWeight: '400',
        color: color.Black,
    },
    pwConatiner: {
        width: constants.width/1.2,
        height: constants.height/18,
        backgroundColor: color.Gray[0],
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        width: constants.width/10,
    },
    pwInput: {
        width: constants.width/1.4,
        backgroundColor: color.Gray[0],
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    error: {
        color: color.Orange[5],
    }
})

export default Input;