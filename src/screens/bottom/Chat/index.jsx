import { View, Text } from 'react-native';
import React from 'react';
import Colors from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Stars from '../../../components/CustomStars';
import globalStyle from '../../../utils/globalStyle';

const Chats = () => {
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
          <Text style={globalStyle.heading}>Chats</Text>
        </View>
      </View>
      <View style={globalStyle.whitecontainer2}></View>
    </LinearGradient>
  );
};

export default Chats;
