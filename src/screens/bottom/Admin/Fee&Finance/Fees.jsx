import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import Images from '../../../../assets';
import CustomDropdown from '../../../../components/CustomDropdown';
const StudentFees = () => {
  const navigation = useNavigation();
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedFeeType, setSelectedFeeType] = useState('all');

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
    { label: 'All', value: 'all' },
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
  const teacherMap = {
    1: {
      name: 'Mrs. Anu Sharma',
      number: '+91-9876543210',
      image: Images.profile,
    },
    2: {
      name: 'Mr. Vikram Joshi',
      number: '+91-9876512340',
      image: Images.profile,
    },
    3: {
      name: 'Ms. Rekha Iyer',
      number: '+91-9876598765',
      image: Images.profile,
    },
    4: {
      name: 'Mr. Ramesh Gupta',
      number: '+91-9876544321',
      image: Images.profile,
    },
  };

  const studentList = [
    {
      id: 'st1',
      name: 'Rahul Sharma',
      class: '1',
      amount: 1200,
      status: 'paid',
      dateTime: '3:05PM - Nov 22, 2025',
    },
    {
      id: 'st2',
      name: 'Anjali Verma',
      class: '2',
      amount: 1300,
      status: 'due',
      dateTime: 'Last Date - Dec 22, 2025',
    },
    {
      id: 'st3',
      name: 'Siddharth Rao',
      class: '1',
      amount: 1250,
      status: 'paid',
      dateTime: '3:05PM - Nov 22, 2025',
    },
    {
      id: 'st4',
      name: 'Priya Singh',
      class: '4',
      amount: 1400,
      status: 'paid',
      dateTime: '3:05PM - Nov 22, 2025',
    },
    {
      id: 'st5',
      name: 'Vikram Patil',
      class: '11',
      amount: 1800,
      status: 'due',
      dateTime: 'Last Date - Dec 22, 2025',
    },
    {
      id: 'st6',
      name: 'Meera Kulkarni',
      class: '7',
      amount: 1500,
      status: 'paid',
      dateTime: '3:05PM - Nov 22, 2025',
    },
  ];

  const filteredStudents = studentList.filter(s => {
    const classMatch = selectedClass === 'all' || s.class === selectedClass;
    const feeMatch = selectedFeeType === 'all' || s.status === selectedFeeType;
    return classMatch && feeMatch;
  });
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
      <View style={[globalStyle.whitecontainer2]}>
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
              width: '100%',
              alignSelf: 'flex-start',
              alignItems: 'center',
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
              width: '100%',
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
          />
        </View>
        {/* Class teacher header */}
        <View style={{ marginBottom: 10 }}>
          {selectedClass !== 'all' && teacherMap[selectedClass] ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                elevation: 2,
              }}
            >
              <Image
                source={teacherMap[selectedClass].image}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  marginRight: 12,
                }}
              />
              <View>
                <Text style={globalStyle.font16BoldB}>
                  {teacherMap[selectedClass].name}
                </Text>
                <Text style={[globalStyle.font12B, { marginTop: 6 }]}>
                  {teacherMap[selectedClass].number}
                </Text>
                <Text style={[globalStyle.font12B, { marginTop: 6 }]}>
                  Class Teacher
                </Text>
              </View>
            </View>
          ) : (
            <Text style={globalStyle.font12B}>
              Select a class to view the class teacher
            </Text>
          )}
        </View>
        {/* Student list */}
        <FlatList
          data={filteredStudents}
          keyExtractor={i => i.id}
          contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 8 }}
          ListEmptyComponent={() => (
            <Text style={globalStyle.font14B}>No students found</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: '#fff',
                padding: 12,
                borderRadius: 10,
                marginBottom: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                elevation: 4,
              }}
            >
              <View>
                <Text style={globalStyle.font16ItalicB}>{item.name}</Text>
                <Text style={globalStyle.font12B}>Class {item.class}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={[
                    globalStyle.font14B,
                    // { color: item.status === 'paid' ? '#1e9b37' : '#ff5a5f' },
                  ]}
                >
                  {item.dateTime}
                </Text>
                <Text
                  style={[
                    globalStyle.font16BoldB,
                    { color: item.status === 'paid' ? '#1e9b37' : '#ff5a5f' },
                  ]}
                >
                  ₹{item.amount}
                </Text>
                <Text
                  style={[
                    globalStyle.font12B,
                    {
                      color: item.status === 'paid' ? '#1e9b37' : '#ff5a5f',
                      marginTop: 6,
                    },
                  ]}
                >
                  {item.status === 'paid' ? 'Paid' : 'Due'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default StudentFees;
