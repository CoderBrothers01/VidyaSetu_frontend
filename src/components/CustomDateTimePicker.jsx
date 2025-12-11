import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Fonts from '../utils/Fonts';
import globalStyle from '../utils/globalStyle';

const CustomDateTimePicker = ({
  open = false,
  mode = 'date', // 'date' | 'time' | 'datetime'
  date = new Date(),
  onConfirm = () => {},
  onCancel = () => {},
  minimumDate,
  maximumDate,
  title = 'Select Date',
  setOpen,
}) => {
  const formatDate = dateVal => {
    return dateVal.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleChange = (event, selectedDate) => {
    setOpen(false);
    if (selectedDate) {
      onConfirm(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      {open && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="calendar"
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={handleChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CustomDateTimePicker;
