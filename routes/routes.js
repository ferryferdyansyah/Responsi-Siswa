import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from '../navigation/ButtomTabs'
import Welcom from '../screens/Welcom';

import ProfileScreen from '../screens/Profile';
import UsersScreen from '../screens/UsersScreen';
import LoginScreen from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

const routes = () => {
  return (
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={Welcom} options={{headerShown: false}} />
        <Stack.Screen name="HomePage" component={BottomTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Users" component={UsersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default routes