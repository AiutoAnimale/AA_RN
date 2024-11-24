import 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import constants from '../../styles/constants';

import HomePage from "../../screens/Home";
import CommunityScreen from "../CommunityScreen";
import TimerScreen from "../TimerScreen";
import KnowingScreen from "../KnowingScreen";
import MyScreen from "../MyScreen";

import Home from "../../assets/icon/TabBar/Home";
import HomeColor from "../../assets/icon/TabBar/HomeColor";
import Community from "../../assets/icon/TabBar/Community";
import CommunityColor from "../../assets/icon/TabBar/CommunityColor";
import Timer from "../../assets/icon/TabBar/Timer";
import TimerColor from "../../assets/icon/TabBar/TimerColor";
import Knowing from "../../assets/icon/TabBar/Knowing";
import KnowingColor from "../../assets/icon/TabBar/KnowingColor";
import My from "../../assets/icon/TabBar/My";
import MyColor from "../../assets/icon/TabBar/MyColor";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const navigation = useNavigation();

    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        if (['HomePage', 'CommunityScreen', 'TimerScreen', 'KnowingScreen', 'MyScreen'].includes(routeName)) {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                display: getTabBarVisibility(route) ? 'flex' : 'none',
                height: constants.height/12,
            },
            })}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? <HomeColor /> : <Home />,
                }}
            />
            <Tab.Screen
                name="CommunityScreen"
                component={CommunityScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? <CommunityColor /> : <Community />,
                }}
            />
            <Tab.Screen
                name="TimerScreen"
                component={TimerScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? <TimerColor /> : <Timer />,
                }}
            />
            <Tab.Screen
                name="KnowingScreen"
                component={KnowingScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? <KnowingColor /> : <Knowing />,
                }}
            />
            <Tab.Screen
                name="MyScreen"
                component={MyScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? <MyColor /> : <My />,
                }}
            />
        </Tab.Navigator>
    );
};

export default MainScreen;
