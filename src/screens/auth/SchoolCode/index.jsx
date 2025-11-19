import { View, Text, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../../utils/globalStyle';
import styles from './style';
import Images from '../../../assets';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../utils/Fonts';

const SchoolId = () => {
  const navigation = useNavigation();
  const [schoolCode, setSchoolCode] = useState('');
  return (
    <View style={[globalStyle.container, styles.container]}>
      <ImageBackground
        source={Images.logo}
        imageStyle={{ opacity: 0.25 , marginTop:60, height:'100%'}} // reduce background image opacity only
        style={{
          height: '50%',
          width: '100%',
          resizeMode: 'contain',
          alignSelf: 'center',
          
        }}
      >
        <View style={{ height: '20%', justifyContent: 'center', }}>
          <View style={[styles.circle]}>
            <Image source={Images.cap} style={styles.cap} />
          </View>
          <Text style={[globalStyle.headertitle,]}>
            Welcome to your school {'\n'} management system
          </Text>
        </View>
        <View style={[globalStyle.p16, { height: '70%', justifyContent: 'center', gap:12}]}>
          <CustomTextInput
            label="School Code"
            placeholder="Enter your school code"
            value={schoolCode}
            onChangeText={setSchoolCode}
          />

          <CustomButton
            title="Verify School"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SchoolId;
