import React, { useEffect, useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/theme";
import constants from "../../../styles/constants";
import CustomText from "../../../styles/customText";

import PetData from '../../../assets/icon/PetData';
import Pet from "../../../assets/icon/Pet";
import My from "../../../assets/icon/My";
import Logout from "../../../assets/icon/Logout";

import HeaderLogo from "../../../assets/icon/HeaderLogo";
import X from "../../../assets/icon/X";
import PetImg from "../../../assets/icon/PetImg";

const MainPage = ({navigation}) => {
    const [ isLogout, setIsLogout ] = useState(false);
    const [ isPetData, setIsPetData ] = useState(false);

    const onClickPetInfo = () => {
        navigation.navigate("PetInfoPage", { screen: 'PetInfoPage'});
    }

    const onClickUserInfo = () => {
        navigation.navigate("UserInfoPage", { screen: 'UserInfoPage'});
    }

    const onClickPetData = () => {
        setIsPetData(true);
    }

    const onClickLogout = () => {
        setIsLogout(true);
    }

    return(
        <View style={Styles.container}>
            <View>
                <CustomText style={Styles.title}>도움말</CustomText>
                <TouchableOpacity style={Styles.option} onPress={onClickPetData}>
                    <PetData />
                    <CustomText style={Styles.optionText}>반려동물 주민등록증</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.option} onPress={onClickPetInfo}>
                    <Pet />
                    <CustomText style={Styles.optionText}>반려동물 정보</CustomText>
                </TouchableOpacity>
            </View>
            <View>
                <CustomText style={Styles.title}>계정</CustomText>
                <TouchableOpacity style={Styles.option} onPress={onClickUserInfo}>
                    <My />
                    <CustomText style={Styles.optionText}>마이페이지</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.option} onPress={onClickLogout}>
                    <Logout />
                    <CustomText style={Styles.optionText}>로그아웃</CustomText>
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                visible={isPetData}
                animationType="fade"
                onRequestClose={() => setIsPetData(false)}
            >
                <View style={Styles.modalOverlay}>
                    <View style={Styles.modalDataContent}>
                        <View style={Styles.flex}>
                            <CustomText style={Styles.modalTitle}>반려동물 주민등록증</CustomText>
                            <TouchableOpacity
                            onPress={() => setIsPetData(false)}
                            >
                                <X />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.flex}>
                            <View style={Styles.row}>
                                <CustomText style={Styles.petName}>코코</CustomText>
                                <CustomText style={Styles.petBreed}>말티즈</CustomText>
                            </View>
                            <PetImg />
                        </View>
                        <View style={Styles.row}>
                            <CustomText style={Styles.petBreed}>생년월일</CustomText>
                            <CustomText style={Styles.petInfo}>2024.07.12</CustomText>
                        </View>
                        <View style={Styles.row}>
                            <CustomText style={Styles.petBreed}>성별</CustomText>
                            <CustomText style={Styles.petInfo}>여아</CustomText>
                        </View>
                        <View style={Styles.center}>
                            <HeaderLogo />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                transparent={true}
                visible={isLogout}
                animationType="fade"
                onRequestClose={() => setIsLogout(false)}
            >
                <View style={Styles.modalOverlay}>
                    <View style={Styles.modalContent}>
                        <CustomText style={Styles.middleText}>정말 로그아웃 하시겠습니까?</CustomText>
                        <View>
                            <CustomText style={Styles.modalText}>기기내 계정에서 로그아웃 할 수 있어요</CustomText>
                            <CustomText style={Styles.modalText}>다음 이용 시에는 다시 로그인 해야합니다.</CustomText>
                        </View>
                        <View style={Styles.btnContainer}>
                            <TouchableOpacity
                                style={Styles.modalNoButton}
                                onPress={() => setIsLogout(false)}
                            >
                                <CustomText style={Styles.modalNoButtonText}>취소</CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={Styles.modalButton}
                                onPress={() => setIsLogout(false)}
                            >
                                <CustomText style={Styles.modalButtonText}>확인</CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        paddingTop: 100,
        paddingLeft: 25,
        backgroundColor: color.White,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        rowGap: 40,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: color.Gray[5],
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    optionText: {
        fontSize: 16,
        color: color.Black,
        marginLeft: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: constants.width / 1.3,
        height: constants.height / 4,
        backgroundColor: color.White,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalDataContent: {
        width: constants.width/1.3,
        height: constants.height/2.3,
        backgroundColor: color.White,
        borderRadius: 10,
        padding: 20,
        rowGap: 20,
        alignItems: 'flex-start',
    },
    modalButton: {
        backgroundColor: color.Orange[4],
        width: constants.width/3,
        height: constants.height/20,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtonText: {
        color: color.White,
        fontWeight: '700',
        fontSize: 15,
    },
    modalNoButton: {
        backgroundColor: color.Gray[0],
        width: constants.width/3,
        height: constants.height/20,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalNoButtonText: {
        color: color.Gray[5],
        fontWeight: '700',
        fontSize: 15,
    },
    modalText: {
        fontSize: 14,
        color: color.Gray[8],
    },
    middleText: {
        fontSize: 18,
        color: color.Gray[8],
        fontWeight: '700'
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    petName: {
        fontSize: 28,
        fontWeight: '700',
        color: color.Black,
    },
    petBreed: {
        fontSize: 15,
        color: color.Gray[8],
    },
    petInfo: {
        fontSize: 16,
        color: color.Black,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: color.Black,
        marginBottom: 20,
    },
    center: {
        width: constants.width/1.5,
        height: constants.height/15,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        width: constants.width/1.5,
        justifyContent: 'space-between',
    },
    row: {
        display: 'flex',
        rowGap: 5
    }
})

export default MainPage;