import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../../../utils/Colors';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomButton from '../../../../components/CustomButton';
import Stars from '../../../../components/CustomStars';
import CustomHeader from '../../../../components/CustomHeader';
import Fonts from '../../../../utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
const Leave = () => {
  const navigation = useNavigation();
  const [leaveType, setLeaveType] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [reason, setReason] = useState('');

  const leaveOptions = [
    { label: 'Sick Leave', value: 'sick' },
    { label: 'Casual Leave', value: 'casual' },
    { label: 'Emergency Leave', value: 'emergency' },
    { label: 'Maternity/Paternity', value: 'maternity' },
  ];

  const formatDate = date => {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleApplyLeave = () => {
    if (!leaveType) {
      alert('Please select leave type');
      return;
    }
    if (!reason.trim()) {
      alert('Please enter reason');
      return;
    }
    // Handle leave application submission
    alert(
      `Leave applied:\nType: ${leaveType}\nFrom: ${formatDate(
        startDate,
      )}\nTo: ${formatDate(endDate)}`,
    );
  };

  // handlers
  const onStartChange = (event, selectedDate) => {
    setShowStartPicker(false);
    if (selectedDate) setStartDate(selectedDate);
  };
  const onEndChange = (event, selectedDate) => {
    setShowEndPicker(false);
    if (selectedDate) setEndDate(selectedDate);
  };
  function getDateDifference(start, end) {
    const startOnly = new Date(start.setHours(0, 0, 0, 0));
    const endOnly = new Date(end.setHours(0, 0, 0, 0));

    const diffTime = endOnly - startOnly;

    if (diffTime < 0) return 0;

    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // inclusive days
  }

  const period = getDateDifference(new Date(startDate), new Date(endDate));

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Apply Leave"
        onBackPress={() => navigation.goBack()}
      />

      <View
        style={[
          globalStyle.whitecontainer,
          { height: '89%', borderTopStartRadius: 25, borderTopEndRadius: 25 },
        ]}
      >
        <Text style={globalStyle.font16ItalicB}>Leave Application Form</Text>
        <Text style={[globalStyle.font12ItalicB, globalStyle.mt10]}>
          Please provide information about your leave
        </Text>

        <View style={{ marginTop: 20, flex: 1, height: '100%' }}>
          <CustomDropdown
            label="Leave Type"
            options={leaveOptions}
            value={leaveType}
            onSelect={val => setLeaveType(val)}
            placeholder="Select Leave Type"
            searchable={false}
            containerStyle={{ marginBottom: 16 }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <View
              style={{
                marginBottom: 16,
                width: '45%',
                justifyContent: 'center',
              }}
            >
              <Text
                style={[
                  globalStyle.font14ItalicB,
                  { color: '#333', marginBottom: 8 },
                ]}
              >
                Start Date
              </Text>
              <TouchableOpacity
                onPress={() => setShowStartPicker(true)}
                style={styles.pickerbtn}
              >
                <Text style={{ color: '#222', ...Fonts.Regular.medium }}>
                  {formatDate(startDate)}
                </Text>
              </TouchableOpacity>

              {showStartPicker && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="calendar"
                  minimumDate={new Date()}
                  onChange={onStartChange}
                />
              )}
            </View>

            {/* End Date Picker */}
            <View
              style={{
                marginBottom: 16,
                width: '45%',
                justifyContent: 'center',
              }}
            >
              <Text
                style={[
                  globalStyle.font14ItalicB,
                  { color: '#333', marginBottom: 8 },
                ]}
              >
                End Date
              </Text>
              <TouchableOpacity
                onPress={() => setShowEndPicker(true)}
                style={styles.pickerbtn}
              >
                <Text style={{ color: '#222', ...Fonts.Regular.medium }}>
                  {formatDate(endDate)}
                </Text>
              </TouchableOpacity>

              {showEndPicker && (
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display="calendar"
                  minimumDate={startDate}
                  onChange={onEndChange}
                />
              )}
            </View>
          </View>
          {period > 0 && (
            <View style={{ marginTop: 10 }}>
              <CustomTextInput
                label="Period of Time"
                value={`${period} ${period === 1 ? 'day' : 'days'}`}
              />
            </View>
          )}
          <CustomTextInput
            placeholder="Enter Reason for Leave"
            label="Reason"
            value={reason}
            onChangeText={setReason}
            multiline={true}
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: 'top', marginBottom: 20 }}
          />

          <CustomButton
            title="Apply Leave"
            onPress={handleApplyLeave}
            style={{ marginTop: 'auto' }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Leave;
