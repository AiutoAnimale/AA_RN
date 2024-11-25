import React from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../../styles/customText";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const Button = (props) => {
    const backgroundColor = props.state ? color.Orange[4] : color.Orange[1];

    return (
        <TouchableOpacity style={[Styles.container, { backgroundColor }]} onPress={props.state==true ? props.onPress : undefined}>
            <CustomText style={Styles.text}>{props.innerText}</CustomText>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    container: {
        width: constants.width / 1.2,
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
        color: color.White,
        fontWeight: '500',
    },
});

export default Button;
