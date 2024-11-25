import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Search from "../../../assets/icon/Search";
import Create from "../../../assets/icon/Create";

import onGetList from "../../../apis/GetList";

const MainPage = ({navigation}) => {
    const [ listData, setListData ] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = onGetList();
        if(data) {
            setListData(data);
        }
    }

    const onClickData = () => {
        navigation.navigate("DataPage", { screen: 'DataPage'});
    }

    const onClickCreate = () => {
        navigation.navigate("CreatePage", { screen: 'CreatePage'});
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.inputContainer}>
                        <Search />
                        <TextInput style={Styles.input} placeholder='검색어를 입력하세요'/>
                    </View>
                </View>
                <TouchableOpacity
                onPress={onClickCreate}
                style={[{position: 'absolute'},
                {bottom: constants.height/50},
                {left: constants.width/1.2},
                {zIndex: 10}]}>
                        <Create />
                </TouchableOpacity>
                <ScrollView style={Styles.body}>
                    {/* {listData ? listData.map((item, index) => {
                        <TouchableOpacity style={Styles.dataContainer} onPress={onClickData}>
                            <View style={Styles.left}>
                                <CustomText style={Styles.tag}>#일상</CustomText>
                                <CustomText style={Styles.text}>우리 애 오늘 쩔었다</CustomText>
                                <View style={Styles.bottom}>
                                    <CustomText style={Styles.data}>이름</CustomText>
                                    <CustomText style={Styles.data}>댓글 20</CustomText>
                                </View>
                            </View>
                            <Image style={Styles.img} />
                        </TouchableOpacity>
                        }
                    ) : <></>} */}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        alignItems: 'center',
    },
    header: {
        width: constants.width,
        height: constants.height/12,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    inputContainer: {
        width: constants.width/1.2,
        height: constants.height/20,
        paddingLeft: 10,
        backgroundColor: color.Gray[0],
        borderRadius: 15,
        borderColor: color.Gray[1],
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: constants.width/1.4,
        height: constants.height/20,
        fontSize: 15,
        fontWeight: '500'
    },
    body: {
        width: constants.width,
        height: constants.height/1.2,
        paddingLeft: 30,
    },
    dataContainer: {
        width: constants.width/1.2,
        height: constants.height/10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    left: {
        width: constants.width/1.8,
        height: constants.height/10,
        display: 'flex',
        justifyContent: 'space-between',
    },
    bottom: {
        width: constants.width/1.8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tag: {
        width: 50,
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
        color: color.Gray[5],
        fontSize: 13,
        fontWeight: '600'
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: color.Black
    }
})

export default MainPage;