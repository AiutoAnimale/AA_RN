import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from "../../../assets/icon/Back";

const AlramPage = ({navigation}) => {
    const [ searchData, setSearchData ] = useState('서울');

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
            <View style={Styles.body}>
                <CustomText style={Styles.title}>편의시설 정보 알리미</CustomText>
                <ScrollView
                style={Styles.select}
                showsHorizontalScrollIndicator = {true}
                horizontal={true}
                >
                    <TouchableOpacity onPress={() => setSearchData('서울')}>
                        <CustomText style={searchData=='서울' ? Styles.tag : Styles.noTag}>서울</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('경기도')}>
                        <CustomText style={searchData=='경기도' ? Styles.tag : Styles.noTag}>경기도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('충청도')}>
                        <CustomText style={searchData=='충청도' ? Styles.tag : Styles.noTag}>충청도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('전라도')}>
                        <CustomText style={searchData=='전라도' ? Styles.tag : Styles.noTag}>전라도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('강원도')}>
                        <CustomText style={searchData=='강원도' ? Styles.tag : Styles.noTag}>강원도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('경상도')}>
                        <CustomText style={searchData=='경상도' ? Styles.tag : Styles.noTag}>경상도</CustomText>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView>
                    <View style={Styles.dataContainer}>
                        <CustomText style={Styles.shap}>#동물병원</CustomText>
                        <CustomText style={Styles.text}>00 동물병원</CustomText>
                        <View style={Styles.bottom}>
                            <CustomText style={Styles.data}>위치</CustomText>
                            <CustomText style={Styles.data}>대전광역시 ㅁㄴㅇㄹㄴㅇㅁㄹㄴㅇㄹ</CustomText>
                        </View>
                        <View style={Styles.bottom}>
                            <CustomText style={Styles.data}>연락처</CustomText>
                            <CustomText style={Styles.data}>052-0000-0000</CustomText>
                        </View>
                    </View>
                </ScrollView>
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
        alignItems:'center',
        rowGap: 30,
    },
    header: {
        width: constants.width,
        height: constants.height/15,
        justifyContent:'flex-end',
        paddingBottom: 10,
        paddingLeft: 15,
    },
    body:{
        width: constants.width/1.1,
        rowGap: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: color.Black
    },
    dataContainer: {
        width: constants.width/1.2,
        height: constants.height/8,
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 30
    },
    bottom: {
        width: constants.width/1.2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shap: {
        width: 70,
        height: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        backgroundColor: color.Orange[0],
        color: color.Orange[4],
        fontSize: 13,
        fontWeight: '600'
    },
    text: {
        color: color.Black,
        fontSize: 18,
        fontWeight: '700'
    },
    data: {
        color: color.Gray[8],
        fontSize: 13,
        fontWeight: '600'
    },
    tag: {
        width: 60,
        height: 30,
        fontSize: 15,
        fontWeight: '500',
        borderColor: color.Orange[4],
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: color.Orange[4],
        color: color.White,
        marginRight: 10,
    },
    noTag: {
        width: 60,
        height: 30,
        fontSize: 15,
        fontWeight: '500',
        borderColor: color.Orange[4],
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: color.White,
        color: color.Orange[4],
        marginRight: 10,
    },
})

export default AlramPage;