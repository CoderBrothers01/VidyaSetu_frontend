import { View, Text } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomDropdown from '../../../../components/CustomDropdown';
import CustomButton from '../../../../components/CustomButton';
const Leave = () => {
  const [leaveType, setLeaveType] = useState(null);
  const leaveOptions = [
    { label: 'Sick Leave', value: 'sick' },
    { label: 'Casual Leave', value: 'casual' },
    { label: 'Emergency Leave', value: 'emergency' },
    { label: 'Maternity/Paternity', value: 'maternity' },
  ];
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <View style={[globalStyle.p16, globalStyle.mt20]}>
        <View style={{ alignItems: 'center' }}>
          <Text style={globalStyle.heading}>Apply Leave</Text>
        </View>
      </View>
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
        <View style={{ marginTop: 20, flex: 1, height:'100%' }}>
          {/* <CustomTextInput
            placeholder="Enter Your Leave Type"
            label="Leave Type"
          /> */}

          <CustomDropdown
            label="Leave Type"
            options={leaveOptions}
            value={leaveType}
            onSelect={val => setLeaveType(val)}
            placeholder="Select Leave Type"
            searchable={false}
            containerStyle={{ marginBottom: 12 }}
          />
          <CustomTextInput placeholder="Enter Start Date" label="Start Date" />
          <CustomTextInput placeholder="Enter End Date" label="End Date" />

          <CustomTextInput
            placeholder="Enter Reason for Leave"
            label="Reason"
            multiline={true}
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: 'top' }}
          />
        <CustomButton
          title="Apply Leave"
          style={{
            marginTop: 35,
          }}
        />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Leave;
