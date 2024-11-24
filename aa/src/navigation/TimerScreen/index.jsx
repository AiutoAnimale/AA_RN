import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TimerPage from "../../screens/Timer/Main";

const Stack = createStackNavigator();

const TimerScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="TimerPage">
            <Stack.Screen name="TimerPage" component={TimerPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default TimerScreen;