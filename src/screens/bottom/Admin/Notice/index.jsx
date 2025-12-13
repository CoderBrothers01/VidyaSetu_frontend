import { View, Text } from 'react-native';
import React from 'react';
import CustomHeader from '../../../../components/CustomHeader';
import Stars from '../../../../components/CustomStars';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Notice = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Notice"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
    </LinearGradient>
  );
};

export default Notice;
