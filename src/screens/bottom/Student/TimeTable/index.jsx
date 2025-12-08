import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import Images from '../../../../assets';
import Stars from '../../../../components/CustomStars';
import Fonts from '../../../../utils/Fonts';

const Timetable = ({ navigation }) => {
  const today = new Date();
  const [cursor, setCursor] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const goPrevMonth = () => {
    let m = cursor.month - 1;
    let y = cursor.year;
    if (m < 0) {
      m = 11;
      y -= 1;
    }
    setCursor({ year: y, month: m });
  };

  const goNextMonth = () => {
    let m = cursor.month + 1;
    let y = cursor.year;
    if (m > 11) {
      m = 0;
      y += 1;
    }
    setCursor({ year: y, month: m });
  };

  const monthTitle = new Date(cursor.year, cursor.month).toLocaleString(
    undefined,
    { month: 'long', year: 'numeric' },
  );

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader
        title="Timetable"
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity>
            <Image
              source={Images.notification}
              style={{ height: 20, width: 20, tintColor: '#fff' }}
            />
          </TouchableOpacity>
        }
      />

      <View
        style={{
          flex: 1,
          // backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingTop: 20,
          paddingHorizontal: 16,
        }}
      >
        {/* Month & Navigation Row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={goPrevMonth} style={{ padding: 8 }}>
            <Text style={{ color: '#fff', ...Fonts.Bold.heading }}>{'‹'}</Text>
          </TouchableOpacity>

          <Text
            style={{
              ...Fonts.Bold.xLarge,
              color: '#ffff',
              flex: 1,
              textAlign: 'center',
            }}
          >
            {monthTitle}
          </Text>

          <TouchableOpacity onPress={goNextMonth} style={{ padding: 8 }}>
            <Text style={{ color: '#fff', ...Fonts.Bold.heading }}>{'›'}</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 40 }} />
      </View>
    </LinearGradient>
  );
};

export default Timetable;
