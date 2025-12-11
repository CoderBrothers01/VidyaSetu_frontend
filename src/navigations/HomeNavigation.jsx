import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/bottom/Home';
import StudentHomework from '../screens/bottom/Student/Homework';
import Attendance from '../screens/bottom/Student/Attendance';
import Fees from '../screens/bottom/Student/Fees';
import Timetable from '../screens/bottom/Student/TimeTable';
import Leave from '../screens/bottom/Student/Leave';
import StaffManagement from '../screens/bottom/Admin/StaffManagement';
import AddStaff from '../screens/bottom/Admin/AddStaff';
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
      <Stack.Screen
        name="Timetable"
        component={Timetable}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Leave"
        component={Leave}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Staff"
        component={StaffManagement}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AddStaff"
        component={AddStaff}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
