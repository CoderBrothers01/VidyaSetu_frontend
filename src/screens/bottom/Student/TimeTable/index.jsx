/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState, useMemo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import Images from '../../../../assets';
import Stars from '../../../../components/CustomStars';
import Fonts from '../../../../utils/Fonts';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getStartOfWeek = date => {
  const d = new Date(date);
  const day = d.getDay(); // 0-6 (Sun-Sat)
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
};

const Timetable = ({ navigation }) => {
  const today = new Date();
  const [weekStart, setWeekStart] = useState(() => getStartOfWeek(today));

  const goPrevWeek = () => {
    setWeekStart(prev => {
      const next = new Date(prev);
      next.setDate(next.getDate() - 7);
      return next;
    });
  };

  const goNextWeek = () => {
    setWeekStart(prev => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 7);
      return next;
    });
  };

  const monthTitle = weekStart.toLocaleString(undefined, {
    month: 'long',
    year: 'numeric',
  });

  const weekDates = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      return d;
    });
  }, [weekStart]);

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader title="Timetable" onBackPress={() => navigation.goBack()} />

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <TouchableOpacity onPress={goPrevWeek} style={{ padding: 8 }}>
            <Text style={{ ...Fonts.Bold.heading, color: '#ffff' }}>{'‹'}</Text>
          </TouchableOpacity>

          <Text
            style={{
              ...Fonts.Bold.xxLarge,
              color: '#fff',
              flex: 1,
              textAlign: 'center',
            }}
          >
            {monthTitle}
          </Text>

          <TouchableOpacity onPress={goNextWeek} style={{ padding: 8 }}>
            <Text style={{ ...Fonts.Bold.heading, color: '#ffff' }}>{'›'}</Text>
          </TouchableOpacity>
        </View>

        {/* Week row below month */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            marginBottom: 12,
          }}
        >
          {weekDates.map((d, idx) => {
            const isToday = d.toDateString() === today.toDateString();
            return (
              <View
                key={idx}
                style={{ alignItems: 'center', width: `${100 / 7}%` }}
              >
                <Text
                  style={{
                    ...Fonts.Bold.small,
                    color: '#fff',
                    marginBottom: 6,
                  }}
                >
                  {WEEKDAYS[d.getDay()]}
                </Text>

                <View
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 17,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isToday
                      ? Colors.CardBackground
                      : 'transparent',
                  }}
                >
                  <Text
                    style={{
                      color: isToday ? '#fff' : '#ffff',
                      fontWeight: isToday ? '700' : '600',
                    }}
                  >
                    {d.getDate()}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          {[
            {
              time: '09:00 - 09:45',
              subject: 'Mathematics',
              teacher: 'Mr. Sharma',
            },
            { time: '10:00 - 10:45', subject: 'English', teacher: 'Ms. Verma' },
            { time: '11:00 - 11:45', subject: 'Physics', teacher: 'Dr. Singh' },
            { time: '12:00 - 12:45', subject: 'Chemistry', teacher: 'Ms. Rao' },
            {
              time: '13:30 - 14:15',
              subject: 'Computer',
              teacher: 'Mr. Patel',
            },
          ].map((p, i) => (
            <View
              key={i}
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 12,
                marginBottom: 12,
                // light shadow (Android/iOS)
                elevation: 2,
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {/* time column */}
              <View style={{ width: 92, alignItems: 'flex-start' }}>
                <Text style={{ ...Fonts.Bold.small, color: '#444' }}>
                  {p.time}
                </Text>
              </View>

              {/* divider */}
              <View
                style={{
                  width: 1,
                  height: 44,
                  backgroundColor: '#eee',
                  marginHorizontal: 12,
                }}
              />

              {/* subject & teacher */}
              <View style={{ flex: 1 }}>
                <Text style={{ ...Fonts.Bold.medium, color: '#000' }}>
                  {p.subject}
                </Text>
                <Text
                  style={{
                    ...Fonts.Regular.small,
                    color: '#666',
                    marginTop: 6,
                  }}
                >
                  {p.teacher}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Timetable;
