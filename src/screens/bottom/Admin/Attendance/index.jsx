import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import styles from './style';

const AttendanceSummaryCard = ({ title, data, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.accentLine} />

      <View style={styles.headerRow}>
        <Text style={globalStyle.font16BoldB}>{title}</Text>
        <Text style={globalStyle.font12B}>Today</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.statBox, styles.totalBox]}>
          <Text style={globalStyle.font12B}>Total</Text>
          <Text style={globalStyle.font18BoldB}>{data.total}</Text>
        </View>

        <View style={[styles.statBox, styles.presentBox]}>
          <Text style={globalStyle.font12B}>Present</Text>
          <Text style={globalStyle.font18BoldB}>{data.present}</Text>
        </View>

        <View style={[styles.statBox, styles.absentBox]}>
          <Text style={globalStyle.font12B}>Absent</Text>
          <Text style={globalStyle.font18BoldB}>{data.absent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AdminAttendance = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('student');

  const classAttendanceData = [
    {
      id: '1',
      className: 'Class 1 - A',
      total: 30,
      present: 26,
      absent: 4,
    },
    {
      id: '2',
      className: 'Class 2 - B',
      total: 28,
      present: 24,
      absent: 4,
    },
    {
      id: '3',
      className: 'Class 3 - A',
      total: 32,
      present: 30,
      absent: 2,
    },
  ];

  const staffAttendanceData = [
    {
      id: '1',
      title: 'Teachers',
      total: 25,
      present: 22,
      absent: 3,
    },
    {
      id: '2',
      title: 'Other Staff',
      total: 18,
      present: 15,
      absent: 3,
    },
  ];

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Attendance"
        onBackPress={() => navigation.goBack()}
      />

      <View
        style={[
          globalStyle.whitecontainer2,
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={[styles.btn, activeTab === 'student' && styles.activeBtn]}
            onPress={() => setActiveTab('student')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'student' && styles.activeText,
              ]}
            >
              Student
            </Text>
          </TouchableOpacity>

          {/* Staff Button */}
          <TouchableOpacity
            style={[styles.btn, activeTab === 'staff' && styles.activeBtn]}
            onPress={() => setActiveTab('staff')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'staff' && styles.activeText,
              ]}
            >
              Staff
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'student' ? (
          <FlatList
            data={classAttendanceData}
            keyExtractor={item => item.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
              <AttendanceSummaryCard title={item.className} data={item} onPress={()=>{
                navigation.navigate('StudentAttendnace')
              }}/>
            )}
          />
        ) : (
          <FlatList
            data={staffAttendanceData}
            keyExtractor={item => item.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
              <AttendanceSummaryCard title={item.title} data={item} onPress={() => {
                navigation.navigate('StaffAttendnace')
              }} />
            )}
          />
        )}
      </View>
    </LinearGradient>
  );
};

export default AdminAttendance;
