import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/bottom/Home';
import StudentHomework from '../screens/bottom/Student/Homework';
import Attendance from '../screens/bottom/Student/Attendance';
import Fees from '../screens/bottom/Student/Fees';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homework"
        component={StudentHomework}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Attendance"
        component={Attendance}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Fees"
        component={Fees}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
