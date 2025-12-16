import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../utils/Fonts';
import globalStyle from '../../../../utils/globalStyle';
import Images from '../../../../assets';
import styles from './style';
import CustomButton from '../../../../components/CustomButton';
const attendanceData = [
  {
    id: '001',
    name: 'Student 1',
    father: 'Mr. Father 1',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '002',
    name: 'Student 2',
    father: 'Mr. Father 2',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '003',
    name: 'Student 3',
    father: 'Mr. Father 3',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '004',
    name: 'Student 4',
    father: 'Mr. Father 4',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '005',
    name: 'Student 5',
    father: 'Mr. Father 5',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '006',
    name: 'Student 6',
    father: 'Mr. Father 6',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '007',
    name: 'Student 7',
    father: 'Mr. Father 7',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '008',
    name: 'Student 8',
    father: 'Mr. Father 8',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '009',
    name: 'Student 9',
    father: 'Mr. Father 9',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '010',
    name: 'Student 10',
    father: 'Mr. Father 10',
    time: null,
    status: 'Unmarked',
  },

  {
    id: '011',
    name: 'Student 11',
    father: 'Mr. Father 11',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '012',
    name: 'Student 12',
    father: 'Mr. Father 12',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '013',
    name: 'Student 13',
    father: 'Mr. Father 13',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '014',
    name: 'Student 14',
    father: 'Mr. Father 14',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '015',
    name: 'Student 15',
    father: 'Mr. Father 15',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '016',
    name: 'Student 16',
    father: 'Mr. Father 16',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '017',
    name: 'Student 17',
    father: 'Mr. Father 17',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '018',
    name: 'Student 18',
    father: 'Mr. Father 18',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '019',
    name: 'Student 19',
    father: 'Mr. Father 19',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '020',
    name: 'Student 20',
    father: 'Mr. Father 20',
    time: null,
    status: 'Unmarked',
  },

  {
    id: '021',
    name: 'Student 21',
    father: 'Mr. Father 21',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '022',
    name: 'Student 22',
    father: 'Mr. Father 22',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '023',
    name: 'Student 23',
    father: 'Mr. Father 23',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '024',
    name: 'Student 24',
    father: 'Mr. Father 24',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '025',
    name: 'Student 25',
    father: 'Mr. Father 25',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '026',
    name: 'Student 26',
    father: 'Mr. Father 26',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '027',
    name: 'Student 27',
    father: 'Mr. Father 27',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '028',
    name: 'Student 28',
    father: 'Mr. Father 28',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '029',
    name: 'Student 29',
    father: 'Mr. Father 29',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '030',
    name: 'Student 30',
    father: 'Mr. Father 30',
    time: null,
    status: 'Unmarked',
  },

  {
    id: '031',
    name: 'Student 31',
    father: 'Mr. Father 31',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '032',
    name: 'Student 32',
    father: 'Mr. Father 32',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '033',
    name: 'Student 33',
    father: 'Mr. Father 33',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '034',
    name: 'Student 34',
    father: 'Mr. Father 34',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '035',
    name: 'Student 35',
    father: 'Mr. Father 35',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '036',
    name: 'Student 36',
    father: 'Mr. Father 36',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '037',
    name: 'Student 37',
    father: 'Mr. Father 37',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '038',
    name: 'Student 38',
    father: 'Mr. Father 38',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '039',
    name: 'Student 39',
    father: 'Mr. Father 39',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '040',
    name: 'Student 40',
    father: 'Mr. Father 40',
    time: null,
    status: 'Unmarked',
  },

  {
    id: '041',
    name: 'Student 41',
    father: 'Mr. Father 41',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '042',
    name: 'Student 42',
    father: 'Mr. Father 42',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '043',
    name: 'Student 43',
    father: 'Mr. Father 43',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '044',
    name: 'Student 44',
    father: 'Mr. Father 44',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '045',
    name: 'Student 45',
    father: 'Mr. Father 45',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '046',
    name: 'Student 46',
    father: 'Mr. Father 46',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '047',
    name: 'Student 47',
    father: 'Mr. Father 47',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '048',
    name: 'Student 48',
    father: 'Mr. Father 48',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '049',
    name: 'Student 49',
    father: 'Mr. Father 49',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '050',
    name: 'Student 50',
    father: 'Mr. Father 50',
    time: null,
    status: 'Unmarked',
  },

  {
    id: '051',
    name: 'Student 51',
    father: 'Mr. Father 51',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '052',
    name: 'Student 52',
    father: 'Mr. Father 52',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '053',
    name: 'Student 53',
    father: 'Mr. Father 53',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '054',
    name: 'Student 54',
    father: 'Mr. Father 54',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '055',
    name: 'Student 55',
    father: 'Mr. Father 55',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '056',
    name: 'Student 56',
    father: 'Mr. Father 56',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '057',
    name: 'Student 57',
    father: 'Mr. Father 57',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '058',
    name: 'Student 58',
    father: 'Mr. Father 58',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '059',
    name: 'Student 59',
    father: 'Mr. Father 59',
    time: null,
    status: 'Unmarked',
  },
  {
    id: '060',
    name: 'Student 60',
    father: 'Mr. Father 60',
    time: null,
    status: 'Unmarked',
  },
];

const TeacherAttendance = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(attendanceData);
  const [isTakingAttendance, setIsTakingAttendance] = useState(false);

  const markAttendance = (index, status) => {
    const updated = [...data];
    updated[index].status = status;
    updated[index].time = '07:05 AM';
    setData(updated);
  };

  // const generateStudents = (count = 50) => {
  //   return Array.from({ length: count }, (_, i) => ({
  //     id: String(i + 1).padStart(3, '0'),
  //     name: `Student ${i + 1}`,
  //     father: `Mr. Father ${i + 1}`,
  //     time: null,
  //     status: 'Unmarked',
  //   }));
  // };

  // const attendanceData = generateStudents(60); // 👈 60 students

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

        <CustomButton
          onPress={() => setIsTakingAttendance(prev => !prev)}
          title={isTakingAttendance ? 'View Student List' : 'Take Attendance'}
          style={{marginBottom:20}}
        />

        <View style={styles.tblHeader}>
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

          {!isTakingAttendance ? (
            <Text
              style={[
                globalStyle.font14ItalicB,
                { width: '40%', textAlign: 'center' },
              ]}
            >
              Father Name
            </Text>
          ) : (
            <>
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
            </>
          )}
        </View>

        {/* TABLE BODY */}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 , paddingBottom : 200 }}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 14,
                borderBottomWidth: 0.5,
                borderColor: '#ddd',
                paddingLeft: 10,
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
                  source={Images.user}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 17,
                    marginRight: 8,
                  }}
                />
                <Text style={globalStyle.font16ItalicB}>{item.name}</Text>
              </View>

              {/* Father OR Attendance */}
              {!isTakingAttendance ? (
                <View style={{ width: '40%' }}>
                  <Text
                    style={[globalStyle.font14ItalicB, { textAlign: 'center' }]}
                  >
                    {item.father}
                  </Text>
                </View>
              ) : (
                <>
                  {/* Time */}
                  <View style={{ width: '20%', marginRight: 5 }}>
                    {item.time ? (
                      <Text style={globalStyle.font14ItalicB}>{item.time}</Text>
                    ) : (
                      <View
                        style={{
                          backgroundColor: '#E0E0E0',
                          paddingVertical: 4,
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={[
                            globalStyle.font12ItalicB,
                            { textAlign: 'center' },
                          ]}
                        >
                          Unmarked
                        </Text>
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
                    {item.status === 'Unmarked' ? (
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
                    ) : (
                      <View
                        style={{
                          backgroundColor:
                            item.status === 'Present'
                              ? Colors.ButtonSecondary
                              : 'red',
                          paddingHorizontal: 12,
                          paddingVertical: 4,
                          borderRadius: 14,
                        }}
                      >
                        <Text style={globalStyle.font12}>{item.status}</Text>
                      </View>
                    )}
                  </View>
                </>
              )}
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default TeacherAttendance;
