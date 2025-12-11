import { View, Text } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import CustomTextInput from '../../../../components/CustomTextInput';
const StaffSalary = () => {
  const navigation = useNavigation();
  const [Search, setSearch] = useState('');
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <CustomHeader
        title="Staff Salary"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={globalStyle.whitecontainer}>
        <CustomTextInput
          placeholder="Search......"
          label="Search"
          value={Search}
          onChangeText={text => setSearch(text)}
        />
      </View>
    </LinearGradient>
  );
};

export default StaffSalary;
