import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Logo from "../../assets/icon/Logo";

const Header = ( props ) => {

    return(
        <View style={Styles.container}>
            <View>
                <Logo></Logo>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: constants.width,
        height: constants.height/20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
})

export default Header;