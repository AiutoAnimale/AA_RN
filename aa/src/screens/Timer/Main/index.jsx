import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, ScrollView, Modal, Image } from "react-native";
import WheelPicker from 'react-native-wheely';
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import Flag from "../../../assets/icon/Flag";
import Plus from "../../../assets/icon/Plus";

const TimerPage = ({ navigation }) => {
    const [timers, setTimers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newTime, setNewTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prevTimers) =>
                prevTimers.map((timer) =>
                    timer.isRunning
                        ? { ...timer, time: timer.time + 1 }
                        : timer
                )
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours} : ${minutes} : ${seconds}`;
    };

    const addTimer = () => {
        const totalSeconds = newTime.hours * 3600 + newTime.minutes * 60 + newTime.seconds;
        if (totalSeconds > 0) {
            setTimers([
                ...timers,
                {
                    id: Date.now().toString(),
                    time: 0,
                    targetTime: totalSeconds,
                    isRunning: false,
                },
            ]);
            setNewTime({ hours: 0, minutes: 0, seconds: 0 });
            setModalVisible(false);
        }
    };

    const deleteTimer = (id) => {
        setTimers(timers.filter((timer) => timer.id !== id));
    };

    const toggleTimer = (id) => {
        setTimers(
            timers.map((timer) =>
                timer.id === id ? { ...timer, isRunning: !timer.isRunning } : timer
            )
        );
    };

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.btn} onPress={() => setModalVisible(true)}>
                <CustomText style={Styles.font}>목표 추가하기</CustomText>
                <Plus />
            </TouchableOpacity>
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalContent}>
                        <Image style={Styles.img} source={require(`../../../assets/image/Pin.png`)} />
                        <CustomText style={Styles.modalTitle}>산책 목표 시간을 설정하세요</CustomText>
                        <View style={Styles.pickerContainer}>
                            <WheelPicker
                                selectedIndex={newTime.hours}
                                options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']}
                                onChange={(value) => setNewTime({ ...newTime, hours: value })}
                                selectedIndicatorStyle={[{backgroundColor: color.White}]}
                                itemTextStyle={[{fontSize: 25}]}
                                containerStyle={[{backgroundColor: color.White}]}
                            />
                            <CustomText>:</CustomText>
                            <WheelPicker
                                selectedIndex={newTime.minutes}
                                options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']}
                                onChange={(value) => setNewTime({ ...newTime, minutes: value })}
                                selectedIndicatorStyle={[{backgroundColor: color.White}]}
                                itemTextStyle={[{fontSize: 25}]}
                                containerStyle={[{backgroundColor: color.White}]}
                            />
                            <CustomText>:</CustomText>
                            <WheelPicker
                                selectedIndex={newTime.seconds}
                                options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']}
                                onChange={(value) => setNewTime({ ...newTime, seconds: value })}
                                selectedIndicatorStyle={[{backgroundColor: color.White}]}
                                itemTextStyle={[{fontSize: 25}]}
                                containerStyle={[{backgroundColor: color.White}]}
                            />
                        </View>
                        <View style={Styles.modalButtons}>
                            <TouchableOpacity
                                style={[Styles.modalButton, {backgroundColor: color.Gray[0]}]}
                                onPress={() => setModalVisible(false)}
                            >
                                <CustomText style={[Styles.modalButtonText, {color: color.Gray[7]}]}>
                                    취소
                                </CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.modalButton} onPress={addTimer}>
                                <CustomText style={Styles.modalButtonText}>추가</CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={Styles.border}></View>
            <FlatList
                data={timers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Styles.dataContainer}>
                        <View style={Styles.tag}>
                            <Flag />
                            <CustomText style={Styles.tagFont}>{formatTime(item.targetTime)}</CustomText>
                        </View>
                        <View style={Styles.timeConatiner}>
                            <CustomText style={Styles.listFont}>현재 시간</CustomText>
                            <CustomText style={Styles.time}>{formatTime(item.time)}</CustomText>
                            <Image style={Styles.watchImg} source={require(`../../../assets/image/Watch.png`)} />
                        </View>
                        <View style={Styles.btnContainer}>
                            <TouchableOpacity
                                style={[Styles.modalButton, {backgroundColor: color.Orange[4]}]}
                                onPress={() => deleteTimer(item.id)}
                            >
                                <CustomText style={[Styles.modalButtonText, {color: color.White}]}>삭제</CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[Styles.modalButton, {backgroundColor: color.Gray[0]}]}
                                onPress={() => toggleTimer(item.id)}
                            >
                                <CustomText style={[Styles.modalButtonText, { color: color.Gray[7] }]}>
                                    {item.isRunning ? '일시정지' : '계속하기'}
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.border}></View>
                    </View>
                )}
            />
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
        fontSize: 18,
        fontWeight: '700',
        color: color.Gray[6],
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    pickerContainer: {
        width: constants.width/1.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 20,
    },
    picker: {
        flex: 1,
        height: 100,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        height: 40,
        marginHorizontal: 5,
        backgroundColor: color.Orange[4],
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonText: {
        color: color.White,
        fontSize: 16,
        fontWeight: '700',
    },
    img: {
        width: 85,
        height: 85,
    },
    watchImg: {
        width: 45,
        height: 45,
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
    },
    timeConatiner: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        width: constants.width/2,
        fontSize: 28,
        fontWeight: '700',
        color: color.Orange[4],
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TimerPage;
