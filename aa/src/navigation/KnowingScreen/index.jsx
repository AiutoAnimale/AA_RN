import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from "../../screens/Knowing/Main";
import AlramPage from "../../screens/Knowing/Alram";
import ActivePage from "../../screens/Knowing/Active";

const Stack = createStackNavigator();

const KnowingScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="AlramPage" component={AlramPage} options={{ headerShown: false }} />
            <Stack.Screen name="ActivePage" component={ActivePage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default KnowingScreen;