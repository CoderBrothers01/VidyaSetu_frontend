import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import styles from './style';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';

const AddStudent = () => {
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
        title="Add Student"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={[
          globalStyle.whitecontainer,
          {
            height: '89%',
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
          },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
        >
          <Text style={globalStyle.font16B}>Student Application Form</Text>
          <Text style={[globalStyle.font12B, globalStyle.mt10]}>
           Please provide information about your Student.
          </Text>
          </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default AddStudent;
