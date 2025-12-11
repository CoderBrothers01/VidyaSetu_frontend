import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import globalStyle from '../../../../utils/globalStyle';
import styles from './style';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomDateTimePicker from '../../../../components/CustomDateTimePicker';
import CustomButton from '../../../../components/CustomButton';
import Fonts from '../../../../utils/Fonts';

const AddStaff = () => {
  const navigation = useNavigation();
  const [staffName, setStaffName] = useState('');
  const [staffType, setStaffType] = useState(null);
  const [joiningDate, setJoiningDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [isClassTeacher, setIsClassTeacher] = useState(null);
  const [address, setAddress] = useState('');
  const [qualification, setQualification] = useState('');
  const [identityProof, setIdentityProof] = useState('');
  const [salary, setSalary] = useState('');

  const staffTypeOptions = [
    { label: 'Teacher', value: 'teacher' },
    { label: 'Support Staff', value: 'support' },
    { label: 'Administrative', value: 'admin' },
    { label: 'Maintenance', value: 'maintenance' },
  ];

  const formatDate = date => {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleAddStaff = () => {
    if (!staffName.trim()) {
      alert('Please enter staff name');
      return;
    }
    if (!staffType) {
      alert('Please select staff type');
      return;
    }
    if (!contactNumber.trim()) {
      alert('Please enter contact number');
      return;
    }
    // Handle form submission
    alert(
      `Staff added: ${staffName}\nType: ${staffType}\nJoining: ${formatDate(
        joiningDate,
      )}`,
    );
  };
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <CustomHeader title="Add Staff" onBackPress={() => navigation.goBack()} />
      <Stars />
      <View
        style={[
          globalStyle.whitecontainer,
          { height: '89%', borderTopStartRadius: 25, borderTopEndRadius: 25 },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        >
          <Text style={globalStyle.font16B}>Staff Application Form</Text>
          <Text style={[globalStyle.font12B, globalStyle.mt10]}>
            Please provide information about your Staff.
          </Text>

          <View style={styles.formview}>
            {/* Staff Name */}
            <CustomTextInput
              placeholder="Enter Staff Name"
              label="Staff Name"
              value={staffName}
              onChangeText={setStaffName}
            />

            {/* Staff Type */}
            <CustomDropdown
              label="Staff Type"
              options={staffTypeOptions}
              value={staffType}
              onSelect={setStaffType}
              placeholder="Select Staff Type"
              // containerStyle={{ marginTop: 16 }}
            />

            {/* Joining Date */}
            <View style={{ marginTop: 16, marginBottom: 8 }}>
              <Text
                style={[
                  globalStyle.font12ItalicB,
                  { marginBottom: 8, color: '#333' },
                ]}
              >
                Joining Date
              </Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
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
                <Text style={{ ...Fonts.Regular.medium, color: '#222' }}>
                  {formatDate(joiningDate)}
                </Text>
              </TouchableOpacity>
              <CustomDateTimePicker
                open={showDatePicker}
                mode="date"
                date={joiningDate}
                onCancel={() => setShowDatePicker(false)}
                onConfirm={d => {
                  setJoiningDate(d);
                  setShowDatePicker(false);
                }}
                title="Joining Date"
              />
            </View>

            {/* Contact Number */}
            <CustomTextInput
              placeholder="Enter Contact Number"
              label="Contact Number"
              value={contactNumber}
              onChangeText={setContactNumber}
              keyboardType="phone-pad"
              containerStyle={{ marginTop: 16 }}
            />

            {/* Subject */}
            <CustomTextInput
              placeholder="Enter Subject (if Teacher)"
              label="Subject"
              value={subject}
              onChangeText={setSubject}
              containerStyle={{ marginTop: 16 }}
            />

            <CustomTextInput
              placeholder="Enter Qualification (e.g., B.A, M.A, B.Ed)"
              label="Qualification"
              value={qualification}
              onChangeText={setQualification}
              containerStyle={{ marginTop: 16 }}
            />

            <CustomTextInput
              placeholder="Enter Identity Proof (e.g., Aadhar, PAN)"
              label="Identity Proof"
              value={identityProof}
              onChangeText={setIdentityProof}
              containerStyle={{ marginTop: 16 }}
            />

            {/* Salary */}
            <CustomTextInput
              placeholder="Enter Monthly Salary"
              label="Monthly Salary (₹)"
              value={salary}
              onChangeText={setSalary}
              keyboardType="decimal-pad"
              containerStyle={{ marginTop: 16 }}
            />

            {/* Class Teacher Toggle */}
            <View style={{ marginTop: 16, marginBottom: 8 }}>
              <Text
                style={[
                  globalStyle.font12ItalicB,
                  { marginBottom: 8, color: '#333' },
                ]}
              >
                Appoint as Class Teacher?
              </Text>
              <View style={{ flexDirection: 'row', gap: 12 }}>
                <TouchableOpacity
                  onPress={() => setIsClassTeacher(true)}
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    borderRadius: 8,
                    backgroundColor:
                      isClassTeacher === true
                        ? Colors.primary || '#2898AE'
                        : '#f5f5f5',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.Bold.medium,
                      color: isClassTeacher === true ? '#fff' : '#333',
                    }}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsClassTeacher(false)}
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    borderRadius: 8,
                    backgroundColor:
                      isClassTeacher === false
                        ? Colors.primary || '#2898AE'
                        : '#f5f5f5',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.Bold.medium,
                      color: isClassTeacher === false ? '#fff' : '#333',
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <CustomTextInput
              placeholder="Enter Address"
              label="Address"
              value={address}
              onChangeText={setAddress}
              multiline={true}
              numberOfLines={3}
              containerStyle={{ marginTop: 16 }}
              style={{ height: 80, textAlignVertical: 'top' }}
            />
            {/* Submit Button */}
            <CustomButton
              title="Add Staff"
              onPress={handleAddStaff}
              style={{ marginTop: 50 }}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default AddStaff;
