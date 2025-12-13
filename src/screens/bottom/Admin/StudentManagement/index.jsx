import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../../components/CustomHeader';
import Stars from '../../../../components/CustomStars';
import globalStyle from '../../../../utils/globalStyle';
import CustomButton from '../../../../components/CustomButton';
import styles from './style';
const StudentManagement = () => {
  const navigation = useNavigation();
    const classesData = [
    "Nursery", "KG-1", "KG-2",
    "Class 1", "Class 2", "Class 3",
    "Class 4", "Class 5", "Class 6",
    "Class 7", "Class 8", "Class 9",
    "Class 10", "Class 11", "Class 12",
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
        title="Student Management"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          globalStyle.mt20,
          { width: '60%', alignItems: 'center', alignSelf: 'center' },
        ]}
      >
        <CustomButton
          title="+ New Admission"
          style={{ borderRadius: 12 }}
          onPress={() => {
            navigation.navigate('AddStudent');
          }}
        />
      </View>
      <View
        style={[
          globalStyle.mt20,
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 16,
          },
        ]}
      >
        <TouchableOpacity style={styles.card}>
          <Text style={globalStyle.font20Italic}>1250</Text>
          <Text style={[globalStyle.font14Italic, { textAlign: 'center' }]}>
            Total {'\n'}Students
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={globalStyle.font20Italic}>50</Text>
          <Text style={[globalStyle.font14Italic, { textAlign: 'center' }]}>
            New {'\n'} Admission
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={[globalStyle.font14Italic, { textAlign: 'center' }]}>
            Leave {'\n'} Application
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          globalStyle.whitecontainer,
          { height: '60%', borderTopStartRadius: 25, borderTopEndRadius: 25 },
        ]}
      >
          <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          {classesData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.classCard}
              onPress={() => navigation.navigate('StudentList', { className: item })}
            >
              <Text style={styles.classText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

export default StudentManagement;
