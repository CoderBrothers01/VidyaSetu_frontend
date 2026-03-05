import { Image, ImageBackground, View, Text } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../utils/globalStyle';
import styles from './style';
import Images from '../../../assets';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import CustomToast from '../../../components/CustomToast';
import { loginUser } from '../../../services';
import { setLogin } from '../../../redux/slices/authSlice';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const schoolId = useSelector(state => state.auth.schoolCode);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState('success');

  const showToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    if (!schoolId) {
      Alert.alert('Error', 'School not selected');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: email.trim(),
        password: password,
        school_id: schoolId,
        fcmToken: null,
      };

      console.log('Login Payload:', payload);

      const response = await loginUser(payload);

      console.log('Login Response:', response.data);
      if (!response.data.is_error) {
        const token = response.data.data?.token;
        const user = response.data.data?.user;

        dispatch(
          setLogin({
            user: user,
            token: token,
          }),
        );
      }

      showToast('Login Successful', 'success');
      navigation.replace('Home');
    } catch (error) {
      console.log(error.response?.data || error.message);
      showToast(
        error.response?.data?.message || 'Invalid credentials',
        'error',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[globalStyle.container, styles.container]}>
      <ImageBackground
        source={Images.logo}
        imageStyle={{ opacity: 0.25, height: '100%' }}
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
            title={loading ? 'Logging in...' : 'Verify Email'}
            onPress={handleLogin}
            disabled={loading}
          />
        </View>
        <CustomToast
          message={toastMessage}
          visible={toastVisible}
          type={toastType}
        />
      </ImageBackground>
    </View>
  );
};
export default Login;
