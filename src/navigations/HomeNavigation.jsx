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
import FeesFinance from '../screens/bottom/Admin/Fee&Finance';
import StaffSalary from '../screens/bottom/Admin/Fee&Finance/Salary';
import StudentFees from '../screens/bottom/Admin/Fee&Finance/Fees';
import ClassManageMent from '../screens/bottom/Admin/ClassManagement';
import StudentManagement from '../screens/bottom/Admin/StudentManagement';
import AddStudent from '../screens/bottom/Admin/AddStudent';
import StudentList from '../screens/bottom/Admin/StudentList';
import AdminAttendance from '../screens/bottom/Admin/Attendance/index';
import StaffAttandance from '../screens/bottom/Admin/Attendance/StaffAttendance';
import StudentAttendnace from '../screens/bottom/Admin/Attendance/StudentAttendance';
import Notice from '../screens/bottom/Admin/Notice';
import ClassSchedule from '../screens/bottom/Admin/ClassSchedule';
import LeaveApproval from '../screens/bottom/Admin/LeaveApproval';
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
        name="Students"
        component={StudentManagement}
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

      <Stack.Screen
        name="FeesFinance"
        component={FeesFinance}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StaffSalary"
        component={StaffSalary}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StudentFees"
        component={StudentFees}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ClassManage"
        component={ClassManageMent}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AddStudent"
        component={AddStudent}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StudentList"
        component={StudentList}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AdminAttendance"
        component={AdminAttendance}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StaffAttendnace"
        component={StaffAttandance}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StudentAttendnace"
        component={StudentAttendnace}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ClassSchedule"
        component={ClassSchedule}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="LeaveApproval"
        component={LeaveApproval}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
