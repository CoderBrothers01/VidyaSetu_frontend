/* eslint-disable react-native/no-inline-styles */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../utils/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import Stars from '../../../../components/CustomStars';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../../utils/globalStyle';
import Fonts from '../../../../utils/Fonts';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const CLASSES = ['6A', '6B', '7A'];
const PERIODS_PER_DAY = 4;

const PERIOD_TIMES = [
  '09:00 - 09:45',
  '10:00 - 10:45',
  '11:00 - 11:45',
  '12:00 - 12:45',
];

/* ---------- STATIC CLASS → SUBJECT → TEACHER ---------- */
const CLASS_SUBJECTS = {
  '6A': [
    { subject: 'Maths', teacher: 'Mr. Sharma' },
    { subject: 'English', teacher: 'Ms. Verma' },
    { subject: 'Science', teacher: 'Mr. Jain' },
    { subject: 'Hindi', teacher: 'Ms. Mehta' },
  ],
  '6B': [
    { subject: 'Maths', teacher: 'Mr. Sharma' },
    { subject: 'English', teacher: 'Ms. Verma' },
    { subject: 'Science', teacher: 'Mr. Jain' },
    { subject: 'Hindi', teacher: 'Ms. Mehta' },
  ],
  '7A': [
    { subject: 'Maths', teacher: 'Mr. Gupta' },
    { subject: 'English', teacher: 'Ms. Verma' },
    { subject: 'Science', teacher: 'Mr. Jain' },
    { subject: 'Hindi', teacher: 'Ms. Mehta' },
  ],
};

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getStartOfWeek = date => {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
};

/* ---------- PERIOD CARD UI ---------- */
const PeriodCard = ({ time, subject, teacher }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {/* Time */}
      <View style={{ width: 92 }}>
        <Text style={{ ...Fonts.Bold.small, color: '#444' }}>{time}</Text>
      </View>

      {/* Divider */}
      <View
        style={{
          width: 1,
          height: 44,
          backgroundColor: '#eee',
          marginHorizontal: 12,
        }}
      />

      {/* Subject & Teacher */}
      <View style={{ flex: 1 }}>
        <Text style={{ ...Fonts.Bold.medium, color: '#000' }}>{subject}</Text>
        <Text
          style={{
            ...Fonts.Regular.small,
            color: '#666',
            marginTop: 6,
          }}
        >
          {teacher}
        </Text>
      </View>
    </View>
  );
};

const ClassSchedule = () => {
  const navigation = useNavigation();
  const today = new Date();

  const [selectedClass, setSelectedClass] = useState('6A');
  const [schedule, setSchedule] = useState({});
  const [weekStart, setWeekStart] = useState(() => getStartOfWeek(today));
  const [selectedDate, setSelectedDate] = useState(today);

  /* ---------- WEEK NAV ---------- */
  const goPrevWeek = () => {
    setWeekStart(prev => {
      const d = new Date(prev);
      d.setDate(d.getDate() - 7);
      return d;
    });
  };

  const goNextWeek = () => {
    setWeekStart(prev => {
      const d = new Date(prev);
      d.setDate(d.getDate() + 7);
      return d;
    });
  };

  const monthTitle = weekStart.toLocaleString('en-US', {
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

  /* ---------- GENERATE TIMETABLE ---------- */
  const generateTimetable = () => {
    const timetable = {};
    const teacherBusy = {};

    DAYS.forEach(day => {
      timetable[day] = {};
      CLASSES.forEach(cls => (timetable[day][cls] = []));

      for (let p = 0; p < PERIODS_PER_DAY; p++) {
        const slotKey = `${day}-${p}`;
        teacherBusy[slotKey] = [];

        CLASSES.forEach(cls => {
          const usedSubjects = timetable[day][cls].map(i => i.subject);

          const available = CLASS_SUBJECTS[cls].filter(
            s =>
              !teacherBusy[slotKey].includes(s.teacher) &&
              !usedSubjects.includes(s.subject),
          );

          const selected =
            available.length > 0
              ? available[Math.floor(Math.random() * available.length)]
              : { subject: 'Free', teacher: '-' };

          teacherBusy[slotKey].push(selected.teacher);
          timetable[day][cls].push(selected);
        });
      }
    });

    setSchedule(timetable);
  };

  useEffect(() => {
    generateTimetable();
  }, []);

  const selectedDayName = DAYS.find(
    d =>
      new Date(selectedDate).toLocaleString('en-US', {
        weekday: 'short',
      }) === d,
  );

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      style={{ flex: 1 }}
    >
      <Stars />
      <CustomHeader title="Class Timetable" onBackPress={navigation.goBack} />

      <View
        style={[
          globalStyle.whitecontainer2,
          { backgroundColor: 'transparent' },
        ]}
      >
        {/* ---------- MONTH HEADER ---------- */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={goPrevWeek}>
            <Text style={{ ...Fonts.Bold.heading, color: '#fff' }}>‹</Text>
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

          <TouchableOpacity onPress={goNextWeek}>
            <Text style={{ ...Fonts.Bold.heading, color: '#fff' }}>›</Text>
          </TouchableOpacity>
        </View>

        {/* ---------- WEEK DATES ---------- */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 12,
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          }}
        >
          {weekDates.map((d, idx) => {
            const isSelected = d.toDateString() === selectedDate.toDateString();
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedDate(d)}
                style={{ alignItems: 'center', width: `${100 / 7}%` }}
              >
                <Text style={{ ...Fonts.Bold.small, color: '#fff' }}>
                  {WEEKDAYS[d.getDay()]}
                </Text>

                <View
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isSelected
                      ? Colors.ButtonPrimary
                      : 'transparent',
                      marginTop:5
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700' }}>
                    {d.getDate()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            {CLASSES.map(cls => (
              <TouchableOpacity
                key={cls}
                onPress={() => setSelectedClass(cls)}
                style={{
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor:
                    selectedClass === cls ? Colors.ButtonPrimary : '#fff',
                }}
              >
                <Text
                  style={{
                    color: selectedClass === cls ? '#fff' : '#000',
                    fontWeight: '700',
                  }}
                >
                  {cls}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ---------- DAY TIMETABLE ---------- */}
          {selectedDayName ? (
            <View style={{ marginTop: 16 }}>
              {schedule[selectedDayName]?.[selectedClass]?.map(
                (item, index) => (
                  <PeriodCard
                    key={index}
                    time={PERIOD_TIMES[index]}
                    subject={item.subject}
                    teacher={item.teacher}
                  />
                ),
              )}
            </View>
          ) : (
            <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>
              No classes today
            </Text>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default ClassSchedule;
