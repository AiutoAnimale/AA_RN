import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Image, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";
import CustomText from "../../styles/customText";

import Header from "../../components/Header";
import Q from "../../assets/icon/Q";
import NO from "../../assets/icon/NO";
import OK from "../../assets/icon/OK";

import { getStorage, setStorage, removeStorage } from "../../utils/Storage";
import onGetMission from '../../apis/GetMissions';
import onMissionCheck from "../../apis/MissionCheck";
import onWeather from '../../apis/weather';

const HomePage = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [weatherData, setWeatherData] = useState();
    const [isQuiz, setIsQuiz] = useState(false);
    const [quizData, setQuizData] = useState();

    useFocusEffect(
        useCallback(() => {
            onGetWeather();
            checkQuizStatus();
        }, [])
    );

    useEffect(() => {
        if (!isQuiz) {
            getMission();
        }
    }, [isQuiz]);

    const checkQuizStatus = async () => {
        const storedDate = await getStorage('quizDate');
        const today = new Date().toISOString().split('T')[0];

        if (storedDate === today) {
            setIsQuiz(true);
        } else {
            setIsQuiz(false);
        }
    };

    const getMission = async () => {
        const res = await onGetMission();
        if (res) {
            setQuizData(res);
        }
    };

    const onGetWeather = async () => {
        const data = await onWeather();
        if (data) {
            setWeatherData(data);
        }
    };

    const handleAnswer = async (data) => {
        const res = await onMissionCheck(data, quizData.mission.missionId);
        if (res) {
            setModalState(true);
            setModalVisible(true);
        } else {
            setModalState(false);
            setModalVisible(true);
        }

        const today = new Date().toISOString().split('T')[0];
        await setStorage('quizDate', today);
        setIsQuiz(true);
    };

    return (
        <View style={Styles.container}>
            <Header />
            <Image style={Styles.img} source={require('../../assets/image/weather.png')} />
            <CustomText style={Styles.Top}>나주시 빛가람동의</CustomText>
            <CustomText style={Styles.Bottom}>오늘 날씨는 비가 옵니다</CustomText>
            <CustomText style={Styles.temp}>{weatherData ? weatherData : undefined}°</CustomText>
            <CustomText style={Styles.data}>우비 & 우산 챙기세요!</CustomText>
            <View style={Styles.dataContainer}>
                <View style={Styles.quizText}>
                    <Q />
                    <CustomText style={Styles.quiz}>오늘의 문제</CustomText>
                </View>
                <CustomText style={Styles.quizLight}>문제를 풀고 레벨을 올려보세요!</CustomText>
                <CustomText style={Styles.q}>{quizData ? quizData.mission.question : undefined}</CustomText>
                <View style={Styles.btnContainer}>
                    <TouchableOpacity
                        style={Styles.btn}
                        onPress={() => handleAnswer(quizData.mission.answer1)}
                    >
                        <CustomText style={Styles.btnText}>{quizData ? quizData.mission.answer1 : undefined}</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.btn}
                        onPress={() => handleAnswer(quizData.mission.answer2)}
                    >
                        <CustomText style={Styles.btnText}>{quizData ? quizData.mission.answer2 : undefined}</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.btn}
                        onPress={() => handleAnswer(quizData.mission.answer3)}
                    >
                        <CustomText style={Styles.btnText}>{quizData ? quizData.mission.answer3 : undefined}</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.btn}
                        onPress={() => handleAnswer(quizData.mission.answer4)}
                    >
                        <CustomText style={Styles.btnText}>{quizData ? quizData.mission.answer4 : undefined}</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={Styles.modalOverlay}>
                    <View style={Styles.modalContent}>
                        {modalState ? <OK /> : <NO />}
                        <CustomText style={Styles.modalText}>
                            {modalState ? "정답이에요!" : "틀렸어요~ 내일 다시 도전해보세요!"}
                        </CustomText>
                        <TouchableOpacity
                            style={Styles.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <CustomText style={Styles.modalButtonText}>확인</CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.White,
        alignItems: 'center',
    },
    img: {
        width: constants.width,
        height: constants.height / 4.5
    },
    Top: {
        position: 'absolute',
        top: constants.height / 8,
        left: constants.width / 15,
        fontSize: 20,
        fontWeight: '700',
        color: color.White
    },
    Bottom: {
        position: 'absolute',
        top: constants.height / 6.5,
        left: constants.width / 15,
        fontSize: 20,
        fontWeight: '700',
        color: color.White
    },
    tag: {
        position: 'absolute',
        top: constants.height / 12,
        left: constants.width / 15,
        fontSize: 12,
        color: color.Gray[8],
        backgroundColor: color.White,
        borderRadius: 6,
        width: constants.width / 3.5,
        height: constants.height / 32,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    temp: {
        position: 'absolute',
        top: constants.height / 8,
        left: constants.width / 1.5,
        fontSize: 50,
        color: color.White
    },
    data: {
        position: 'absolute',
        top: constants.height / 5,
        left: constants.width / 15,
        fontSize: 14,
        color: color.White
    },
    dataContainer: {
        width: constants.width / 1.1,
        height: constants.height / 2,
        padding: 10,
        paddingTop: 30,
        rowGap: 10,
    },
    quizText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    quiz: {
        fontSize: 20,
        fontWeight: '700',
    },
    quizLight: {
        fontSize: 14,
        color: color.Gray[8],
    },
    q: {
        fontSize: 17,
        fontWeight: '700',
        color: color.Black,
        marginTop: 20
    },
    btn: {
        width: constants.width / 1.2,
        height: constants.height / 17,
        borderWidth: 1,
        borderColor: color.Gray[2],
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    btnText: {
        color: color.Gray[6],
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    btnContainer: {
        marginTop: 30,
        rowGap: 15
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: constants.width / 1.3,
        height: constants.height / 3.5,
        backgroundColor: color.White,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        color: color.Gray[8],
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: color.Orange[4],
        width: constants.width / 2,
        height: constants.height / 18,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtonText: {
        color: color.White,
        fontWeight: '700',
        fontSize: 17,
    },
});

export default HomePage;
