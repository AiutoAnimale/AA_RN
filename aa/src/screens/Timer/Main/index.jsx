import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Image, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Flag from "../../../assets/icon/Flag";
import Plus from "../../../assets/icon/Plus";

const TimerPage = ({ navigation }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours} : ${minutes} : ${seconds}`;
    };

    const onClickAdd = () => {
        navigation.navigate("CreatePage", { screen: 'CreatePage' });
    };

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.btn} onPress={onClickAdd}>
                <CustomText style={Styles.font}>목표 추가하기</CustomText>
                <Plus />
            </TouchableOpacity>
            <View style={Styles.border}></View>
            <View style={Styles.dataContainer}>
                <View style={Styles.tag}>
                    <Flag />
                    <CustomText style={Styles.tagFont}>02 : 30 : 00</CustomText>
                </View>
                <View style={Styles.timeConatiner}>
                    <CustomText style={Styles.listFont}>현재 시간</CustomText>
                    <CustomText style={Styles.time}>{formatTime(time)}</CustomText>
                    <Image style={Styles.img} source={require('../../../assets/image/Watch.png')} />
                </View>
                <View style={Styles.btnContainer}>
                    <TouchableOpacity
                        style={[Styles.delete, {backgroundColor: color.Orange[4]}]}
                        onPress={() => {
                            setTime(0);
                            setIsRunning(false);
                        }}
                    >
                        <CustomText style={[Styles.deleteFont, {color: color.White}]}>삭제</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.delete, {backgroundColor: color.Gray[0]}]}
                        onPress={() => setIsRunning(!isRunning)}
                    >
                        <CustomText style={[Styles.deleteFont, {color: color.Gray[7]}]}>
                            {isRunning ? '일시정지' : '계속하기'}
                        </CustomText>
                    </TouchableOpacity>
                </View>
                <View style={Styles.border}></View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        paddingTop: constants.height / 15,
        alignItems: 'center',
        rowGap: 20,
    },
    btn: {
        width: constants.width / 1.2,
        height: constants.height / 15,
        backgroundColor: color.Gray[0],
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: {
        width: constants.width / 3.5,
        height: constants.height / 30,
        fontSize: 18,
        fontWeight: '700',
        color: color.Gray[6],
    },
    border: {
        width: constants.width / 1.2,
        height: 0.5,
        backgroundColor: color.Gray[1],
    },
    dataContainer: {
        width: constants.width / 1.2,
        height: constants.height / 4,
        rowGap: 20,
    },
    tag: {
        width: constants.width / 3,
        height: constants.height / 28,
        borderRadius: 30,
        backgroundColor: color.Orange[0],
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagFont: {
        fontSize: 15,
        fontWeight: '600',
        color: color.Orange[4],
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    listFont: {
        width: 80,
        fontSize: 16,
        fontWeight: '700',
        color: color.Gray[8],
    },
    time: {
        fontSize: 28,
        fontWeight: '700',
        color: color.Orange[4],
        width: constants.width / 2,
    },
    timeConatiner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 45,
        height: 45,
    },
    delete: {
        width: constants.width / 2.5,
        height: constants.height / 20,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteFont: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TimerPage;
