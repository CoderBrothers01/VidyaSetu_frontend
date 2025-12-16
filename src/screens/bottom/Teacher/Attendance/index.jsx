import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../utils/Fonts';
import globalStyle from '../../../../utils/globalStyle';
import Images from '../../../../assets';
import styles from './style'

const attendanceData = [
  { id: '001', name: 'S.Name', time: '07:03 AM', status: 'Present' },
  { id: '002', name: 'S.Name', time: '07:03 AM', status: 'Present' },
  { id: '003', name: 'S.Name', time: '07:03 AM', status: 'Absent' },
  { id: '004', name: 'S.Name', time: '07:04 AM', status: 'Absent' },
  { id: '005', name: 'S.Name', time: null, status: 'Unmarked' },
  { id: '006', name: 'S.Name', time: null, status: 'Unmarked' },
  { id: '007', name: 'S.Name', time: null, status: 'Unmarked' },
];

const TeacherAttendance = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(attendanceData);

  const markAttendance = (index, status) => {
    const updated = [...data];
    updated[index].status = status;
    updated[index].time = '07:05 AM';
    setData(updated);
  };

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader title="Attendance" onBackPress={navigation.goBack} />

      <View style={globalStyle.whitecontainer2}>
        <Text
          style={[
            globalStyle.font16BoldB,
            { textAlign: 'center', marginBottom: 8 },
          ]}
        >
          Class Attendance
        </Text>
        <View
          style={styles.tblHeader}
        >
          <Text
            style={[
              globalStyle.font14ItalicB,
              { width: '12%', textAlign: 'center' },
            ]}
          >
            R.No.
          </Text>
          <Text
            style={[
              globalStyle.font14ItalicB,
              { width: '48%', textAlign: 'center' },
            ]}
          >
            Name
          </Text>
          <Text
            style={[
              globalStyle.font14ItalicB,
              { width: '22%', textAlign: 'center' },
            ]}
          >
            Time
          </Text>
          <Text
            style={[
              globalStyle.font14ItalicB,
              { width: '26%', textAlign: 'center' },
            ]}
          >
            Action
          </Text>
        </View>

        {/* TABLE BODY */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 14,
                borderBottomWidth: 0.5,
                borderColor: '#ddd',
              }}
            >
              {/* R.No */}
              <Text style={[globalStyle.font16ItalicB, { width: '12%' }]}>
                {item.id}
              </Text>

              {/* Name + Image */}
              <View
                style={{
                  width: '48%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={Images.user} // replace with actual image
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 17,
                    marginRight: 8,
                  }}
                />
                <Text style={globalStyle.font16ItalicB}>{item.name}</Text>
              </View>

              {/* Time / Unmarked */}
              <View style={{ width: '22%' }}>
                {item.time ? (
                  <Text style={globalStyle.font14ItalicB}>{item.time}</Text>
                ) : (
                  <View
                    style={{
                      backgroundColor: '#E0E0E0',
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 10,
                      alignSelf: 'flex-start',
                    }}
                  >
                    <Text style={globalStyle.font12ItalicB}>Unmarked</Text>
                  </View>
                )}
              </View>

              {/* Action */}
              <View
                style={{
                  width: '26%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {item.status === 'Present' && (
                  <View
                    style={{
                      backgroundColor: Colors.ButtonSecondary,
                      paddingHorizontal: 12,
                      paddingVertical: 4,
                      borderRadius: 14,
                    }}
                  >
                    <Text style={globalStyle.font12}>Present</Text>
                  </View>
                )}

                {item.status === 'Absent' && (
                  <View
                    style={{
                      backgroundColor: 'red',
                      paddingHorizontal: 12,
                      paddingVertical: 4,
                      borderRadius: 14,
                    }}
                  >
                    <Text style={globalStyle.font12}>Absent</Text>
                  </View>
                )}

                {item.status === 'Unmarked' && (
                  <>
                    <TouchableOpacity
                      onPress={() => markAttendance(index, 'Present')}
                      style={{
                        backgroundColor: Colors.ButtonSecondary,
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 6,
                      }}
                    >
                      <Text style={{ color: '#fff', fontWeight: '700' }}>
                        P
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => markAttendance(index, 'Absent')}
                      style={{
                        backgroundColor: 'red',
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ color: '#fff', fontWeight: '700' }}>
                        A
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default TeacherAttendance;
