import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../utils/Colors'; // Importing Colors file
import Fonts from '../utils/Fonts';

const CustomButton = ({ title, onPress, style, textStyle, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : null, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.ButtonPrimary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
   ...Fonts.Bold.large,
   color: '#fff',
  },
  disabledButton: {
    backgroundColor: Colors.ButtonSecondary,
    opacity: 0.6,
  },
});

export default CustomButton;
