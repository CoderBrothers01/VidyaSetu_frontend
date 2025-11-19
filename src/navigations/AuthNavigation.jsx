import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SchoolId from '../screens/auth/SchoolCode';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SchoolCode"
        component={SchoolId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
