import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import globalStyle from '../../../../utils/globalStyle';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const staffList = [
  {
    id: 1,
    name: 'Rahul Sharma',
    subject: 'Maths',
    status: 'present',
    mobile: '9876543210',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Neha Verma',
    subject: 'English',
    status: 'absent',
    mobile: '9123456789',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Amit Jain',
    subject: 'Science',
    status: 'present',
    mobile: '9988776655',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    id: 4,
    name: 'Pooja Mehta',
    subject: 'Hindi',
    status: 'absent',
    mobile: '9012345678',
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
];

const StaffAttendance = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('present');
  const filteredStaff = staffList.filter(item => item.status === activeTab);

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Staff Attendance"
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
        <View style={{ marginTop: 20 }}>
          {filteredStaff.length === 0 ? (
            <Text style={[globalStyle.font14Medium, { textAlign: 'center' }]}>
              No staff found
            </Text>
          ) : (
            filteredStaff.map(item => (
              <View key={item.id} style={styles.card2}>
                {/* Left Section */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.profileImage}
                  />

                  <View style={{ marginLeft: 12, gap:8 }}>
                    <Text style={globalStyle.font16BoldB}>{item.name}</Text>
                    <Text style={globalStyle.font14ItalicB}>
                      {item.subject}
                    </Text>
                    <Text style={globalStyle.font12ItalicB}>
                     {item.mobile}
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

export default StaffAttendance;
