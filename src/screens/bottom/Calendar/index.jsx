import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useMemo, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../utils/Colors';
import Stars from '../../../components/CustomStars';
import styles from './style';
import globalStyle from '../../../utils/globalStyle';
import Fonts from '../../../utils/Fonts';
import { useFocusEffect } from '@react-navigation/native';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function monthMatrix(year, month) {
  // month: 0-11
  const first = new Date(year, month, 1);
  const startDay = first.getDay(); // 0-6
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const matrix = [];
  let week = [];
  // fill previous month's tail
  for (let i = 0; i < startDay; i++) {
    const day = daysInPrev - startDay + 1 + i;
    week.push({ day, monthOffset: -1 });
  }
  // fill current month
  for (let d = 1; d <= daysInMonth; d++) {
    week.push({ day: d, monthOffset: 0 });
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  // fill next month's head
  let nextDay = 1;
  while (week.length < 7) {
    week.push({ day: nextDay++, monthOffset: 1 });
  }
  matrix.push(week);
  return matrix;
}

const Calendar = () => {
  const today = new Date();
  const [cursor, setCursor] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selected, setSelected] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  });

  // sample events - replace with real data
  const events = {
    // 'YYYY-MM-DD': [{ title: 'Event' }, ...]
    [today.toISOString().slice(0, 10)]: [{ title: 'Today' }],
  };

  const matrix = useMemo(
    () => monthMatrix(cursor.year, cursor.month),
    [cursor],
  );

  const goPrev = () => {
    let m = cursor.month - 1;
    let y = cursor.year;
    if (m < 0) {
      m = 11;
      y -= 1;
    }
    setCursor({ year: y, month: m });
  };
  const goNext = () => {
    let m = cursor.month + 1;
    let y = cursor.year;
    if (m > 11) {
      m = 0;
      y += 1;
    }
    setCursor({ year: y, month: m });
  };

  const monthTitle = `${cursor.year} - ${new Date(
    cursor.year,
    cursor.month,
  ).toLocaleString(undefined, {
    month: 'long',
  })}`;

  useFocusEffect(
    useCallback(() => {
      const today = new Date();

      // Reset cursor month & year to today
      setCursor({
        year: today.getFullYear(),
        month: today.getMonth(),
      });

      // Reset selected date to today
      setSelected({
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
      });

      // No cleanup needed
      return () => {};
    }, []),
  );

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />

      <View style={[globalStyle.p16, globalStyle.mt20]}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text
            style={globalStyle.heading}
          >
            Calendar and Events
          </Text>
        </View>
      </View>

      <View style={globalStyle.whitecontainer}>
        {/* calendar header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
          }}
        >
          {/* Month title on the left */}
          <Text style={{ ...Fonts.Bold.large, color: '#000' }}>
            {monthTitle}
          </Text>

          {/* Both arrows grouped on the right */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={goPrev}
              style={{ padding: 8, marginRight: 8 }}
            >
              <Text style={{ color: '#444', fontWeight: '700', fontSize: 24 }}>
                {'‹'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goNext} style={{ padding: 8 }}>
              <Text style={{ color: '#444', fontWeight: '700', fontSize: 24 }}>
                {'›'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* weekdays */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
            paddingHorizontal: 6,
          }}
        >
          {WEEKDAYS.map(w => (
            <Text
              key={w}
              style={{
                width: `${100 / 7}%`,
                textAlign: 'center',
                color: '#666',
                fontWeight: '600',
              }}
            >
              {w}
            </Text>
          ))}
        </View>

        {/* days grid */}
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          {matrix.map((week, wi) => (
            <View
              key={wi}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 4, // decreased gap between week rows
                paddingHorizontal: 6,
              }}
            >
              {week.map((cell, ci) => {
                // derive actual date for comparison
                let cellYear = cursor.year;
                let cellMonth = cursor.month;
                if (cell.monthOffset === -1) {
                  // previous month
                  const date = new Date(cursor.year, cursor.month, 1);
                  date.setMonth(date.getMonth() - 1);
                  cellYear = date.getFullYear();
                  cellMonth = date.getMonth();
                } else if (cell.monthOffset === 1) {
                  const date = new Date(cursor.year, cursor.month, 1);
                  date.setMonth(date.getMonth() + 1);
                  cellYear = date.getFullYear();
                  cellMonth = date.getMonth();
                }
                const cellDate = new Date(cellYear, cellMonth, cell.day);
                const iso = cellDate.toISOString().slice(0, 10);
                const isToday = iso === today.toISOString().slice(0, 10);
                const isSelected =
                  selected.year === cellYear &&
                  selected.month === cellMonth &&
                  selected.day === cell.day;
                const isCurrentMonth = cell.monthOffset === 0;

                return (
                  <TouchableOpacity
                    key={ci}
                    onPress={() =>
                      setSelected({
                        year: cellYear,
                        month: cellMonth,
                        day: cell.day,
                      })
                    }
                    activeOpacity={0.8}
                    style={{
                      width: `${100 / 7}%`,
                      alignItems: 'center',
                      paddingVertical: 6,
                      borderRadius: 8,
                    }}
                  >
                    {isSelected ? (
                      <LinearGradient
                        colors={['#60CDFF', '#A2DDF8']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Text style={{ color: '#fff', fontWeight: '700' }}>
                          {cell.day}
                        </Text>
                      </LinearGradient>
                    ) : (
                      <View
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: isCurrentMonth ? 1 : 0.45,
                        }}
                      >
                        <Text
                          style={{
                            color: isToday ? Colors.CardBackground : '#222',
                            fontWeight: isToday ? '700' : '600',
                          }}
                        >
                          {cell.day}
                        </Text>
                      </View>
                    )}

                    {/* event dot */}
                    {events[iso] ? (
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: '#F00',
                          marginTop: 4, // slightly smaller gap between date and dot
                        }}
                      />
                    ) : (
                      <View style={{ height: 6, marginTop: 4 }} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

          {/* selected date details */}
          <View style={{ padding: 16 }}>
            <Text style={{ ...Fonts.Bold.medium, color: '#000' }}>
              Selected: {selected.year}-
              {String(selected.month + 1).padStart(2, '0')}-
              {String(selected.day).padStart(2, '0')}
            </Text>
            {(() => {
              const iso = `${selected.year}-${String(
                selected.month + 1,
              ).padStart(2, '0')}-${String(selected.day).padStart(2, '0')}`;
              const dayEvents = events[iso] || [];
              return (
                <View style={{ marginTop: 8 }}>
                  {dayEvents.length === 0 ? (
                    <Text style={{ color: '#666', marginTop: 6 }}>
                      No events
                    </Text>
                  ) : (
                    dayEvents.map((e, i) => (
                      <View key={i} style={{ marginTop: 6 }}>
                        <Text style={{ color: '#444' }}>{e.title}</Text>
                      </View>
                    ))
                  )}
                </View>
              );
            })()}
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Calendar;
