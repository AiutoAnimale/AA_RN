import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import KnowingMainPage from "../../screens/Knowing/Main";
import AlramPage from "../../screens/Knowing/Alram";
import ActivePage from "../../screens/Knowing/Active";

const Stack = createStackNavigator();

const KnowingScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="KnowingMainPage">
            <Stack.Screen name="KnowingMainPage" component={KnowingMainPage} options={{ headerShown: false }} />
            <Stack.Screen name="AlramPage" component={AlramPage} options={{ headerShown: false }} />
            <Stack.Screen name="ActivePage" component={ActivePage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default KnowingScreen;