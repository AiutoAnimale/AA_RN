import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../../styles/customText";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

export default function Select(props) {
    const backgroundColor = props.state==props.innerText ? color.Orange[4] : color.Gray[0];
    const Color = props.state==props.innerText ? color.White : color.Gray[5];

    return (
        <TouchableOpacity style={[Styles.container, { backgroundColor }]} onPress={props.onPress}>
            <CustomText style={[Styles.text, { color: Color }]}>{props.innerText}</CustomText>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width / 2.5,
        height: constants.height / 20,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
});
