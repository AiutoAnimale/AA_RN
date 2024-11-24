import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyMainPage from "../../screens/My/Main";
import PetInfoPage from "../../screens/My/PetInfo";
import UserInfoPage from "../../screens/My/UserInfo";

const Stack = createStackNavigator();

const MyScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="MyMainPage">
            <Stack.Screen name="MyMainPage" component={MyMainPage} options={{ headerShown: false }} />
            <Stack.Screen name="PetInfoPage" component={PetInfoPage} options={{ headerShown: false }} />
            <Stack.Screen name="UserInfoPage" component={UserInfoPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MyScreen;