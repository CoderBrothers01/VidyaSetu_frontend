import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import Images from '../assets/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import globalStyle from '../utils/globalStyle';

const CustomHeader = ({
  title,
  onBackPress,
  rightComponent,
  showBackArrow = true,
  source,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {showBackArrow && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image
            source={Images.back}
            style={{ height: 30, width: 30, tintColor: '#fff' }}
          />
        </TouchableOpacity>
      )}
      <Text style={[globalStyle.heading, { marginTop: 0 }]}>{title}</Text>
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
    // backgroundColor: 'transparent', // set if needed
  },
  backButton: {
    alignItems: 'center',
    // keep small touch area if needed
  },

  rightComponent: { width: 30 },
});

export default CustomHeader;
