import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomDropdown from '../../../../components/CustomDropdown';
import Images from '../../../../assets';
const StaffSalary = () => {
  const navigation = useNavigation();
  const [Search, setSearch] = useState('');
  const [selectedFeeType, setSelectedFeeType] = useState('all');

  const feeTypeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Paid', value: 'paid' },
    { label: 'Due', value: 'due' },
  ];
  const staffList = [
    {
      id: 's1',
      name: 'Rahul Sharma',
      number: '+91-9587546253',
      salary: 12000,
      status: 'paid',
    },
    {
      id: 's2',
      name: 'Anjali Verma',
      number: '+91-9587546253',
      salary: 13000,
      status: 'due',
    },
    {
      id: 's3',
      name: 'Siddharth Rao',
      number: '+91-9587546253',
      salary: 12500,
      status: 'paid',
    },
    {
      id: 's4',
      name: 'Priya Singh',
      number: '+91-9587546253',
      salary: 14000,
      status: 'paid',
    },
    {
      id: 's5',
      name: 'Vikram Patil',
      number: '+91-9587546253',
      salary: 18000,
      status: 'due',
    },
    {
      id: 's6',
      name: 'Meera Kulkarni',
      number: '+91-9587546253',
      salary: 15000,
      status: 'paid',
    },
  ];

  const filteredStaff = staffList.filter(st => {
    const q = (Search || '').trim().toLowerCase();
    const matchesSearch = q === '' || st.name.toLowerCase().includes(q);
    const matchesFee =
      selectedFeeType === 'all' || st.status === selectedFeeType;
    return matchesSearch && matchesFee;
  });
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
      <CustomHeader
        title="Staff Salary"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          globalStyle.whitecontainer,
          {
            height: '88%',
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            padding: 16,
          },
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
            width: '100%',
          }}
        >
          <CustomTextInput
            label="Search by name"
            placeholder="Enter Staff name"
            value={Search}
            onChangeText={text => setSearch(text)}
            style={{ width: '48%' }}
            // inputStyle={{ paddingVertical: 12 }}
          />

          <CustomDropdown
            label="Salary Type"
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
        <FlatList
          data={filteredStaff}
          keyExtractor={item => item.id}
          style={{ marginTop: 6 }}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={() => (
            <View style={{ padding: 12 }}>
              <Text style={globalStyle.font14B}>No staff found.</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 12,
                marginBottom: 8,
                elevation: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
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
                  <Text style={globalStyle.font16ItalicB}>{item.name}</Text>
                  <Text style={[globalStyle.font12B, { marginTop: 4 }]}>
                    {item.number}
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={[
                    globalStyle.font14Bold,
                    { color: item.status === 'paid' ? '#1e9b37' : '#ff5a5f' },
                  ]}
                >
                  ₹{item.salary}
                </Text>
                <Text
                  style={[
                    globalStyle.font12B,
                    {
                      marginTop: 4,
                      color: item.status === 'paid' ? '#1e9b37' : '#ff5a5f',
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

export default StaffSalary;
