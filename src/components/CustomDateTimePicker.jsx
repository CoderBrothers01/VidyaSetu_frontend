import React from 'react';
import { View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDateTimePicker = ({
  open = false,
  mode = 'date',
  date = new Date(),
  onConfirm = () => {},
  onCancel = () => {},
  minimumDate,
  maximumDate,
}) => {
  if (!open) return null;

  return (
    <View>
      <DateTimePicker
        value={date}
        mode={mode}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onChange={(event, selectedDate) => {
          if (Platform.OS === 'android') {
            onCancel(); // close picker
          }
          if (selectedDate) {
            onConfirm(selectedDate);
          }
        }}
      />
    </View>
  );
};

export default CustomDateTimePicker;
