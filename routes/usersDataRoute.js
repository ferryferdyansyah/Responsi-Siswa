import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import UsersScreen from '../screens/UsersScreen';

const Stack = createStackNavigator();

const usersData = () => {
    return (
        <Stack.Navigator initialRouteName="UserScreen">
            <Stack.Screen name="UserScreen" component={UsersScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default usersData