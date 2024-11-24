import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CommunityMainPage from "../../screens/Community/Main";
import DataPage from "../../screens/Community/Data";

const Stack = createStackNavigator();

const KnowingScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="CommunityMainPage">
            <Stack.Screen name="CommunityMainPage" component={CommunityMainPage} options={{ headerShown: false }} />
            <Stack.Screen name="DataPage" component={DataPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default KnowingScreen;