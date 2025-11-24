import { View, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../utils/Colors';
import Stars from '../../../components/CustomStars';
import globalStyle from '../../../utils/globalStyle';
import Fonts from '../../../utils/Fonts';

const Notifications = () => {
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />

      <View style={[globalStyle.p16, globalStyle.mt20]}>
        <View style={{ alignItems: 'center' }}>
          <Text style={globalStyle.heading}>Notifications</Text>
        </View>
      </View>
      <View style={globalStyle.whitecontainer}></View>
    </LinearGradient>
  );
};

export default Notifications;
