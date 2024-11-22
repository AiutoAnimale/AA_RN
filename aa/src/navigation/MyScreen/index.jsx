import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from "../../screens/My/Main";
import PetInfoPage from "../../screens/My/PetInfo";
import UserInfoPage from "../../screens/My/UserInfo";

const Stack = createStackNavigator();

const MyScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="PetInfoPage" component={PetInfoPage} options={{ headerShown: false }} />
            <Stack.Screen name="UserInfoPage" component={UserInfoPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MyScreen;