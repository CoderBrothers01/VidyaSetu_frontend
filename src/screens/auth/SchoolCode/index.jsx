import { View, Text, Image, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../../utils/globalStyle';
import styles from './style';
import Images from '../../../assets';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../utils/Fonts';
import { getSchoolId } from '../../../services/index';
import CustomToast from '../../../components/CustomToast';
import { useDispatch } from 'react-redux';
import { setSchool } from '../../../redux/slices/authSlice';

const SchoolId = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [schoolCode, setSchoolCode] = useState('');
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

  const handleVerifySchool = async () => {
    if (!schoolCode) {
      showToast('Please enter school code', 'error');
      return;
    }

    try {
      setLoading(true);

      const response = await getSchoolId();
      const schoolList = response.data?.data || [];
      const enteredCode = Number(schoolCode.trim());

      const matchedSchool = schoolList.find(
        school => school.school_id === enteredCode,
      );

      if (matchedSchool) {
        showToast(`Welcome to ${matchedSchool.name}`, 'success');
        dispatch(
          setSchool({
            school: matchedSchool,
            schoolCode: enteredCode,
          }),
        );

        navigation.navigate('Login');
      } else {
        showToast('School code does not match', 'error');
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert('Error', 'Failed to verify school');
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
          <View style={[styles.circle]}>
            <Image source={Images.cap} style={styles.cap} />
          </View>
          <Text style={[globalStyle.headertitle]}>
            Welcome to your school {'\n'} management system
          </Text>
        </View>
        <View
          style={[
            globalStyle.p16,
            { height: '70%', justifyContent: 'center', gap: 12 },
          ]}
        >
          <CustomTextInput
            label="School Code"
            placeholder="Enter your school code"
            value={schoolCode}
            onChangeText={setSchoolCode}
            keyboardType='number-pad'
            
          />

          <CustomButton title="Verify School" onPress={handleVerifySchool} />
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

export default SchoolId;
