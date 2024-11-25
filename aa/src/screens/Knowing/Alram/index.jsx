import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from "../../../assets/icon/Back";
import onGetAlramList from '../../../apis/GetAlramList';

const AlramPage = ({navigation}) => {
    const [ searchData, setSearchData ] = useState('서울');
    const [ listData, setListData ] = useState();

    useEffect(()=> {
        getAlram();
    }, [searchData])

    const getAlram = async () => {
        const data = await onGetAlramList(searchData);
        if(data) {
            setListData(data);
        }
    }

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
                    <TouchableOpacity onPress={() => setSearchData('경기')}>
                        <CustomText style={searchData=='경기' ? Styles.tag : Styles.noTag}>경기도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('충청')}>
                        <CustomText style={searchData=='충청' ? Styles.tag : Styles.noTag}>충청도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('전라')}>
                        <CustomText style={searchData=='전라' ? Styles.tag : Styles.noTag}>전라도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('강원')}>
                        <CustomText style={searchData=='강원' ? Styles.tag : Styles.noTag}>강원도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('경상')}>
                        <CustomText style={searchData=='경상' ? Styles.tag : Styles.noTag}>경상도</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('인천')}>
                        <CustomText style={searchData=='인천' ? Styles.tag : Styles.noTag}>인천</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('대전')}>
                        <CustomText style={searchData=='대전' ? Styles.tag : Styles.noTag}>대전</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('대구')}>
                        <CustomText style={searchData=='대구' ? Styles.tag : Styles.noTag}>대구</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('부산')}>
                        <CustomText style={searchData=='부산' ? Styles.tag : Styles.noTag}>부산</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('광주')}>
                        <CustomText style={searchData=='광주' ? Styles.tag : Styles.noTag}>광주</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('울산')}>
                        <CustomText style={searchData=='울산' ? Styles.tag : Styles.noTag}>울산</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('세종')}>
                        <CustomText style={searchData=='세종' ? Styles.tag : Styles.noTag}>세종</CustomText>
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