import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../../../components/CustomHeader';
import globalStyle from '../../../../utils/globalStyle';
import Colors from '../../../../utils/Colors';
import Stars from '../../../../components/CustomStars';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Images from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
const LeaveApproval = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Leave Approval"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={globalStyle.whitecontainer2}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={[styles.btn, activeTab === 'pending' && styles.activeBtn]}
            onPress={() => setActiveTab('pending')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'pending' && styles.activeText,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, activeTab === 'accept' && styles.activeBtn]}
            onPress={() => setActiveTab('accept')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'accept' && styles.activeText,
              ]}
            >
              Accept
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, activeTab === 'reject' && styles.activeBtn]}
            onPress={() => setActiveTab('reject')}
          >
            <Text
              style={[
                globalStyle.font16ItalicB,
                activeTab === 'reject' && styles.activeText,
              ]}
            >
              Reject
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
          <Image source={Images.profile} style={{ height: 50, width: 50 }} />
          <View style={{ gap: 8 }}>
            <Text style={globalStyle.font18ItalicB}>Suresh Yadav</Text>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <CustomButton
                title="Approve"
                textStyle={globalStyle.font12Bold}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  backgroundColor: 'green',
                }}
              />
              <CustomButton
                title="Reject"
                textStyle={globalStyle.font12Bold}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  backgroundColor: 'red',
                }}
              />
            </View>
          </View>
          <View>
            <Text style={globalStyle.font14BoldB}>Annual Leave</Text>
            <Text style={globalStyle.font12B}>From date - last Date </Text>
            <Text style={globalStyle.font12B}>Reason</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LeaveApproval;
