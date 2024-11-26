import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Back from "../../../assets/icon/Back";
import onGetActs from '../../../apis/GetActs';

const ActivePage = ({navigation}) => {
    const [ searchData, setSearchData ] = useState('강아지');
    const [ data, setData ] = useState();

    useEffect(()=>{
        onGetData('1');
    }, [])

    useEffect(()=>{
        if(searchData == '강아지') {
            onGetData('1');
        } else if(searchData == '고양이') {
            onGetData('2');
        }
    }, [searchData])

    const onGetData = async (id) => {
        const res = await onGetActs(id);
        if(res) {
            console.log(res[0]);
            setData(res[0]);
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
                <CustomText style={Styles.title}>반려동물 행동 요령</CustomText>
                <ScrollView
                style={Styles.select}
                showsHorizontalScrollIndicator = {true}
                horizontal={true}
                >
                    <TouchableOpacity onPress={() => setSearchData('강아지')}>
                        <CustomText style={searchData=='강아지' ? Styles.tag : Styles.noTag}>강아지</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('고양이')}>
                        <CustomText style={searchData=='고양이' ? Styles.tag : Styles.noTag}>고양이</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('도마뱀')}>
                        <CustomText style={searchData=='도마뱀' ? Styles.tag : Styles.noTag}>도마뱀</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('기니피그')}>
                        <CustomText style={searchData=='기니피그' ? Styles.tag : Styles.noTag}>기니피그</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('햄스터')}>
                        <CustomText style={searchData=='햄스터' ? Styles.tag : Styles.noTag}>햄스터</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSearchData('물고기')}>
                        <CustomText style={searchData=='물고기' ? Styles.tag : Styles.noTag}>물고기</CustomText>
                    </TouchableOpacity>
                </ScrollView>
                <CustomText style={Styles.data}>{data ? data.title : undefined}</CustomText>
                <CustomText style={Styles.data}>{data ? data.body : undefined}</CustomText>
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
    select: {
        display: 'flex',
        height: constants.height/20,
    },
    data: {
        color: color.Gray[8],
        fontSize: 18,
    }
})

export default ActivePage;