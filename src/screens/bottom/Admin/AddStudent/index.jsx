import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import styles from './style';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomDateTimePicker from '../../../../components/CustomDateTimePicker';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomButton from '../../../../components/CustomButton';

const AddStudent = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState(new Date());
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [admissionDate, setAdmissionDate] = useState(new Date());
  const [fatherContactNumber, setFatherContactNumber] = useState('');
  const [showAdmissionPicker, setShowAdmissionPicker] = useState(false);

  const classOptions = [
    { label: 'Play Group', value: 'play_group' },
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

  const formatDate = date => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
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
        title="Add Student"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          globalStyle.whitecontainer2,
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        >
          <Text style={globalStyle.font16B}>Student Application Form</Text>
          <Text style={[globalStyle.font12B, globalStyle.mt10]}>
            Please provide information about your Student.
          </Text>
          <View style={styles.formview}>
            <CustomTextInput
              label="Name"
              placeholder="Enter Student Name"
              value={name}
              onChangeText={text => setName(text)}
            />

            <CustomTextInput
              label="Email"
              placeholder="Enter email address"
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <CustomDropdown
              label="Select Class"
              options={classOptions}
              value={selectedClass}
              onSelect={val => setSelectedClass(val)}
              placeholder="Choose Class"
              searchable
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
                marginTop: 10,
              }}
            >
              <View style={{ width: '48%' }}>
                <Text
                  style={[
                    globalStyle.font16ItalicB,
                    { marginBottom: 8, color: '#333' },
                  ]}
                >
                  Date of Birth
                </Text>
                <TouchableOpacity
                  onPress={() => setShowDobPicker(true)}
                  style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 12,
                    paddingVertical: 15,
                    paddingHorizontal: 12,
                    backgroundColor: '#fff',
                    elevation: 4,
                  }}
                >
                  <Text style={{ color: '#222' }}>{formatDate(dob)}</Text>
                </TouchableOpacity>

                <CustomDateTimePicker
                  open={showDobPicker}
                  mode="date"
                  date={dob}
                  onCancel={() => setShowDobPicker(false)}
                  onConfirm={d => {
                    setDob(d);
                    setShowDobPicker(false);
                  }}
                  title="Date of Birth"
                />
              </View>

              {/* Admission Date */}
              <View style={{ width: '48%' }}>
                <Text
                  style={[
                    globalStyle.font16ItalicB,
                    { marginBottom: 8, color: '#333' },
                  ]}
                >
                  Admission Date
                </Text>
                <TouchableOpacity
                  onPress={() => setShowAdmissionPicker(true)}
                  style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 12,
                    paddingVertical: 15,
                    paddingHorizontal: 12,
                    backgroundColor: '#fff',
                    elevation: 4,
                  }}
                >
                  <Text style={{ color: '#222' }}>
                    {formatDate(admissionDate)}
                  </Text>
                </TouchableOpacity>

                <CustomDateTimePicker
                  open={showAdmissionPicker}
                  mode="date"
                  date={admissionDate}
                  onCancel={() => setShowAdmissionPicker(false)}
                  onConfirm={d => {
                    setAdmissionDate(d);
                    setShowAdmissionPicker(false);
                  }}
                  title="Admission Date"
                />
              </View>
            </View>

            <CustomTextInput
              label="Father Name"
              placeholder="Enter Father Name"
              value={fatherName}
              onChangeText={text => setFatherName(text)}
            />

            <CustomTextInput
              label="Mother Name"
              placeholder="Enter Mother Name"
              value={motherName}
              onChangeText={text => setMotherName(text)}
            />

            <CustomTextInput
              label="Contact Number"
              placeholder="Enter mobile number"
              value={contactNumber}
              onChangeText={text => setContactNumber(text)}
            />

            <CustomTextInput
              label="Father Contact Number"
              placeholder="Enter father mobile number"
              value={fatherContactNumber}
              onChangeText={text => setFatherContactNumber(text)}
            />

            <CustomTextInput
              label="Address"
              placeholder="Enter Address"
              multiline={true}
              numberOfLines={4}
              style={{ textAlignVertical: 'top' }}
              value={address}
              onChangeText={text => setAddress(text)}
            />

             <CustomButton
              title="Add Student"
              onPress={()=>{}}
              style={{ marginTop: 50 }}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default AddStudent;
