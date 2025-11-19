import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons or use any other icon library

const CustomHeader = ({
  title,
  onBackPress,
  rightComponent,
  showBackArrow = true,
  source
}) => {
  return (
    <View style={styles.container}>
      {showBackArrow && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
          <Image source={source}/>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightComponent}>
        {rightComponent && rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  rightComponent: {
    position: 'absolute',
    right: 16,
  },
});

export default CustomHeader;
