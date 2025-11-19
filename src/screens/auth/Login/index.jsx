import { Image, ImageBackground, View, Text } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../utils/globalStyle';
import styles from './style';
import Images from '../../../assets';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <View style={[globalStyle.container, styles.container]}>
      <ImageBackground
        source={Images.logo}
        imageStyle={{ opacity: 0.25, marginTop: 100, height: '100%' }} // reduce background image opacity only
        style={{
          height: '50%',
          width: '100%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      >

        <View style={{ height: '20%', justifyContent: 'center' }}>
          <View style={[styles.circle, { marginBottom: -20, zIndex: 2 }]}>
            <Image source={Images.cap} style={styles.cap} />
          </View>
          <Text style={[globalStyle.headertitle]}>
            Please enter your {'\n'} registered Email -Id
          </Text>
        </View>
        <View
          style={[
            globalStyle.p16,
            { height: '70%', justifyContent: 'center', gap: 12, zIndex: 1 },
          ]}
        >
          <CustomTextInput
            label="Email - Id"
            placeholder="Enter your Email - Id"
            value={email}
            onChangeText={setemail}
          />

          <CustomTextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setpassword}
          />

          <CustomButton
            title="Verify Email"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
