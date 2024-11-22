import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import HeaderLogo from "../../assets/icon/HeaderLogo";

const Header = ( props ) => {

    return(
        <View style={Styles.container}>
            <HeaderLogo />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: constants.width/18,
    },
})

export default Header;