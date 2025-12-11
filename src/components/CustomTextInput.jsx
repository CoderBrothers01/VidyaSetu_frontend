import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Fonts from '../utils/Fonts';
import globalStyle from '../utils/globalStyle';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  multiline = false,
  style,
  inputStyle,
  labelStyle,
  errorStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={[globalStyle.font16Italic, styles.label, labelStyle]}>
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        style={[
          styles.input,
          multiline && styles.multilineInput,
          inputStyle,
          globalStyle.font14BoldB,
        ]}
        {...props}
      />
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: '#000',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    elevation: 8,
  },
  multilineInput: {
    textAlignVertical: 'top', // Ensures proper alignment for multiline input
    paddingVertical: 10,
    height: 100, // Default height for multiline input
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
});

export default CustomTextInput;
