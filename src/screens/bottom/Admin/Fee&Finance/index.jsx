import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import Stars from '../../../../components/CustomStars';
import globalStyle from '../../../../utils/globalStyle';
import styles from './style';
import Fonts from '../../../../utils/Fonts';
const FeesFinance = () => {
  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader title="Fees & Finance" onBackPress={() => {}} />
      <View
        style={[
          globalStyle.whitecontainer,
          { height: '89%', borderTopStartRadius: 25, borderTopEndRadius: 25 },
        ]}
      >
        <Text style={globalStyle.font16ItalicB}>
          Financial reports and fee management
        </Text>
        <View
          style={[
            globalStyle.mt20,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            },
          ]}
        >
          <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <View
              style={{
                backgroundColor: '#fff',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <Text
                style={[
                  { color: Colors.CardBackground, ...Fonts.Bold.heading },
                ]}
              >
                ₹
              </Text>
            </View>
            <Text style={globalStyle.font20Bold}>₹ 11000</Text>
            <Text style={[globalStyle.font16, { textAlign: 'center' }]}>
              This Month Fee Structure
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <View
              style={{
                backgroundColor: '#fff',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <Text
                style={[
                  { color: Colors.CardBackground, ...Fonts.Bold.heading },
                ]}
              >
                ₹
              </Text>
            </View>
            <Text style={globalStyle.font20Bold}>30</Text>
            <Text style={[globalStyle.font16, { textAlign: 'center' }]}>
              student Pending Due
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[globalStyle.font16ItalicB, globalStyle.mt20]}>
          Staff salary & Student fee class list data
        </Text>
        <View
          style={[
            globalStyle.mt20,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            },
          ]}
        >
          <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <View
              style={{
                backgroundColor: '#fff',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <Text
                style={[
                  { color: Colors.CardBackground, ...Fonts.Bold.heading },
                ]}
              >
                ₹
              </Text>
            </View>
            <Text style={globalStyle.font20Bold}>Staff Salary</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <View
              style={{
                backgroundColor: '#fff',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <Text
                style={[
                  { color: Colors.CardBackground, ...Fonts.Bold.heading },
                ]}
              >
                ₹
              </Text>
            </View>
            <Text style={globalStyle.font20Bold}>Students Fees</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default FeesFinance;
