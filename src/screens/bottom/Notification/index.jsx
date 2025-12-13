import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../utils/Colors';
import Stars from '../../../components/CustomStars';
import globalStyle from '../../../utils/globalStyle';
import Fonts from '../../../utils/Fonts';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getStartOfWeek = date => {
  const d = new Date(date);
  const day = d.getDay(); // 0-6 (Sun-Sat)
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
};

const notificationsData = [
  {
    id: '1',
    title: 'Holiday Announcement',
    message: 'School will remain closed on Friday due to maintenance work.',
    date: '2025-12-13',
    type: 'announcement',
  },
  {
    id: '2',
    title: 'Fee Reminder',
    message: 'Please submit the pending school fee before 20th December.',
    date: '2025-12-13',
    type: 'fee',
  },
  {
    id: '3',
    title: 'Exam Schedule',
    message: 'Mid-term exams will start from 5th January.',
    date: '2025-12-12',
    type: 'exam',
  },
  {
    id: '4',
    title: 'PTM Meeting',
    message: 'Parent-Teacher meeting scheduled on 18th December.',
    date: '2025-12-11',
    type: 'meeting',
  },
];

const Notifications = () => {
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

      <View style={[globalStyle.p16, globalStyle.mt20]}>
        <View style={{ alignItems: 'center' }}>
          <Text style={globalStyle.heading}>Notifications</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 16,
        }}
      >
        {/* Month row with prev/next controlling week */}
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
                <View
                  style={{
                    width: 45,
                    height: 60,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isToday ? Colors.CardBackground : '#FFF',
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.Bold.small,
                      color: isToday
                        ? Colors.TextPrimary
                        : Colors.TextSecondary,
                      marginBottom: 6,
                    }}
                  >
                    {WEEKDAYS[d.getDay()]}
                  </Text>
                  <Text
                    style={{
                      color: isToday
                        ? Colors.TextPrimary
                        : Colors.TextSecondary,
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

        {/* rest of timetable content here */}
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          {notificationsData.map(item => (
            <View
              key={item.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: 14,
                padding: 14,
                marginBottom: 12,
                elevation: 3,
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 6,
              }}
            >
              {/* Header row */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}
              >
                <Text style={[globalStyle.font14BoldB, { flex: 1 }]}>
                  {item.title}
                </Text>
                <Text style={[globalStyle.font12B, { color: '#999' }]}>
                  {new Date(item.date).toDateString()}
                </Text>
              </View>

              {/* Message */}
              <Text
                style={[
                  globalStyle.font12B,
                  {
                    color: '#555',
                    lineHeight: 18,
                  },
                ]}
              >
                {item.message}
              </Text>

              {/* Type badge */}
              <View
                style={{
                  marginTop: 10,
                  alignSelf: 'flex-start',
                  backgroundColor:
                    item.type === 'exam'
                      ? '#FFF4E5'
                      : item.type === 'fee'
                      ? '#E9F7EF'
                      : '#EEF2FF',
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={[
                    globalStyle.font12BoldB,
                    {
                      color:
                        item.type === 'exam'
                          ? '#E67E22'
                          : item.type === 'fee'
                          ? '#27AE60'
                          : '#3F51B5',
                    },
                  ]}
                >
                  {item.type.toUpperCase()}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Notifications;
