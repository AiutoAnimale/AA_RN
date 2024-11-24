import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TimerMainPage from "../../screens/Timer/Main";
import TimerCreatePage from "../../screens/Timer/Create";

const Stack = createStackNavigator();

const TimerScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="TimerMainPage">
            <Stack.Screen name="TimerMainPage" component={TimerMainPage} options={{ headerShown: false }} />
            <Stack.Screen name="TimerCreatePage" component={TimerCreatePage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default TimerScreen;