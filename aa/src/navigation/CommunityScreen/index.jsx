import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from "../../screens/Community/Main";
import DataPage from "../../screens/Community/Data";

const Stack = createStackNavigator();

const KnowingScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="DataPage" component={DataPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default KnowingScreen;