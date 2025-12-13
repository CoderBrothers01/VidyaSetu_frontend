import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import styles from './style';
import Images from '../../../../assets';
const StudentList = () => {
  const navigation = useNavigation();
  const students = [
    {
      id: '1',
      name: 'Aman Sharma',
      rollNo: 1,
      fatherName: 'Rajesh Sharma',
      mobile: '9876543210',
    },
    {
      id: '2',
      name: 'Riya Verma',
      rollNo: 2,
      fatherName: 'Suresh Verma',
      mobile: '9123456780',
    },
    {
      id: '3',
      name: 'Kunal Mehta',
      rollNo: 3,
      fatherName: 'Mahesh Mehta',
      mobile: '9988776655',
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
        title="Class Detail"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          globalStyle.whitecontainer,
          {
            height: '89%',
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            backgroundColor: 'transparent',
          },
        ]}
      >
        <Text
          style={[
            globalStyle.font16Italic,
            { marginLeft: 5, paddingBottom: 5 },
          ]}
        >
          Class Teacher
        </Text>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Left: Teacher Info */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={Images.profile}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  marginRight: 12,
                }}
              />
              <View>
                <Text style={globalStyle.font16ItalicB}>Mr. Rahul</Text>
                <Text style={[globalStyle.font12B, { marginTop: 4 }]}>
                  Class - X B
                </Text>
              </View>
            </View>

            {/* Right: Change Teacher */}
            <TouchableOpacity
              onPress={() => {
                // navigate to change teacher screen OR open modal
                // navigation.navigate('ChangeClassTeacher');
              }}
            >
              <Text
                style={[globalStyle.font12ItalicB, { color: Colors.primary }]}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={globalStyle.mt20}>
          <Text
            style={[
              globalStyle.font16Italic,
              { marginLeft: 5, paddingBottom: 5 },
            ]}
          >
            Student List
          </Text>
          <View style={{ marginTop: 10, gap: 10 }}>
            {students.map(item => (
              <View key={item.id} style={[styles.card, {height:'auto',  justifyContent:'center', alignItems:'center'}]}>
                <View
                  style={{ flexDirection: 'row', alignItems: 'flex-start', }}
                >
                  {/* Roll Number Circle */}
                  <View
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: Colors.CardBackground,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 12,
                    }}
                  >
                    <Text style={[globalStyle.font14B, { color: '#ffff', fontWeight: 'bold' }]}>
                      {item.rollNo}
                    </Text>
                  </View>

                  {/* Student Details */}
                  <View style={{ flex: 1 }}>
                    <Text style={globalStyle.font16ItalicB}>{item.name}</Text>

                    <Text
                      style={[
                        globalStyle.font14Italic,
                        { marginTop: 4, color: '#555' },
                      ]}
                    >
                      Father: {item.fatherName}
                    </Text>

                    <Text
                      style={[
                        globalStyle.font14Italic,
                        { marginTop: 2, color: '#555' },
                      ]}
                    >
                      Mobile: {item.mobile}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default StudentList;
