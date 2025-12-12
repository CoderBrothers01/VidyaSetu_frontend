import { View, Text } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import CustomDropdown from '../../../../components/CustomDropdown';
const StudentFees = () => {
  const navigation = useNavigation();
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedFeeType, setSelectedFeeType] = useState('paid');

  const classOptions = [
    { label: 'All Classes', value: 'all' },
    { label: 'Nursery', value: 'nursery' },
    { label: 'LKG', value: 'lkg' },
    { label: 'UKG', value: 'ukg' },
    { label: 'Class 1', value: '1' },
    { label: 'Class 2', value: '2' },
    { label: 'Class 3', value: '3' },
    { label: 'Class 4', value: '4' },
    { label: 'Class 5', value: '5' },
    { label: 'Class 6', value: '6' },
    { label: 'Class 7', value: '7' },
    { label: 'Class 8', value: '8' },
    { label: 'Class 9', value: '9' },
    { label: 'Class 10', value: '10' },
    { label: 'Class 11', value: '11' },
    { label: 'Class 12', value: '12' },
  ];

  const feeTypeOptions = [
    { label: 'Paid', value: 'paid' },
    { label: 'Due', value: 'due' },
  ];
  const getCurrentMonth = () => {
    const d = new Date();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Student Fees"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          globalStyle.whitecontainer,
          { height: '89%', borderTopStartRadius: 25, borderTopEndRadius: 25 },
        ]}
      >
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Text style={globalStyle.font18BoldB}>{getCurrentMonth()}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <CustomDropdown
            label="Select Class"
            options={classOptions}
            value={selectedClass}
            onSelect={val => setSelectedClass(val)}
            placeholder="Select Class"
            searchable={true}
            containerStyle={{ width: '48%' }}
             dropdownStyle={{
              width: '48%',
              alignSelf: 'flex-start',
              marginTop: 50,
            }}
          />
          <CustomDropdown
            label="Fee Type"
            options={feeTypeOptions}
            value={selectedFeeType}
            onSelect={val => setSelectedFeeType(val)}
            placeholder="Select Fee Type"
            searchable={false}
            containerStyle={{ width: '48%' }}
             dropdownStyle={{
              width: '48%',
              alignSelf: 'flex-end',
              marginTop: 50,
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default StudentFees;
