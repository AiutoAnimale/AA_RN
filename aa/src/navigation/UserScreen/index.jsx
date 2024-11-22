import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from "../../screens/Auth";
import SignupPage from "../../screens/User";

const Stack = createStackNavigator();

const UserScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="SignupPage">
            <Stack.Screen name="SignupPage" component={SignupPage} options={{ headerShown: false }} />
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default UserScreen;