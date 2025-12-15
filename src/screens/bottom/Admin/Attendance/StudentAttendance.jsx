import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import globalStyle from '../../../../utils/globalStyle';

const studentList = [
  {
    id: 1,
    name: 'Aarav Mehta',
    class: 'Class 8 - A',
    rollNo: '12',
    status: 'present',
    mobile: '9876543210',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    class: 'Class 8 - A',
    rollNo: '18',
    status: 'absent',
    mobile: '9123456789',
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 3,
    name: 'Rohan Jain',
    class: 'Class 8 - B',
    rollNo: '07',
    status: 'present',
    mobile: '9988776655',
    image: 'https://randomuser.me/api/portraits/men/42.jpg',
  },
  {
    id: 4,
    name: 'Pooja Patel',
    class: 'Class 8 - B',
    rollNo: '21',
    status: 'absent',
    mobile: '9012345678',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
];

const StudentAttendance = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('present');

  const filteredStudents = studentList.filter(
    item => item.status === activeTab,
  );

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Student Attendnace"
        onBackPress={() => {
          navigation.goBack();
        }}
      />

      <View
        style={[
          globalStyle.whitecontainer2,
          // { backgroundColor: 'transparent' },
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={[styles.btn, activeTab === 'present' && styles.activeBtn]}
            onPress={() => setActiveTab('present')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'present' && styles.activeText,
              ]}
            >
              Present
            </Text>
          </TouchableOpacity>

          {/* Staff Button */}
          <TouchableOpacity
            style={[styles.btn, activeTab === 'absent' && styles.activeBtn]}
            onPress={() => setActiveTab('absent')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'absent' && styles.activeText,
              ]}
            >
              Absent
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, gap:8 }}>
          <Text style={globalStyle.font18ItalicB}>Class 8 - A</Text>
          {filteredStudents.length === 0 ? (
            <Text style={[globalStyle.font14Medium, { textAlign: 'center' }]}>
              No students found
            </Text>
          ) : (
            filteredStudents.map(item => (
              <View key={item.id} style={styles.card2}>
                {/* Left Section */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.profileImage}
                  />

                  <View style={{ marginLeft: 12, gap: 6 }}>
                    <Text style={globalStyle.font16BoldB}>{item.name}</Text>
                    <Text style={globalStyle.font14ItalicB}>
                      {item.class} | Roll: {item.rollNo}
                    </Text>
                  </View>
                </View>

                {/* Status */}
                <Text
                  style={[
                    globalStyle.font12ItalicB,
                    item.status === 'present'
                      ? styles.presentText
                      : styles.absentText,
                  ]}
                >
                  {item.status.toUpperCase()}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default StudentAttendance;
