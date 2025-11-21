import { View, Text, Image, ScrollView, Animated, Easing } from 'react-native';
import React, { useRef, useEffect } from 'react';
import globalStyle from '../../../utils/globalStyle';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../utils/Colors';
import Images from '../../../assets';
import Fonts from '../../../utils/Fonts';

const Stars = () => {
  const stars = [
    { left: '6%', top: '6%', size: 14, opacity: 0.9, char: '✦' },
    { left: '18%', top: '12%', size: 10, opacity: 0.7, char: '★' },
    { left: '30%', top: '4%', size: 12, opacity: 0.6, char: '✦' },
    { left: '48%', top: '10%', size: 16, opacity: 0.85, char: '★' },
    { left: '68%', top: '6%', size: 10, opacity: 0.6, char: '✦' },
    { left: '84%', top: '14%', size: 12, opacity: 0.7, char: '★' },
    { left: '10%', top: '28%', size: 8, opacity: 0.5, char: '✦' },
    { left: '38%', top: '26%', size: 9, opacity: 0.5, char: '✦' },
    { left: '62%', top: '22%', size: 11, opacity: 0.6, char: '★' },
    { left: '80%', top: '30%', size: 8, opacity: 0.45, char: '✦' },
    { left: '50%', top: '3%', size: 8, opacity: 0.5, char: '✦' },
    { left: '26%', top: '18%', size: 10, opacity: 0.55, char: '★' },
  ];

  const animsRef = useRef(stars.map(() => new Animated.Value(Math.random())));
  const anims = animsRef.current;

  useEffect(() => {
    const loops = anims.map(anim => {
      const dur = 1800 + Math.floor(Math.random() * 2000);
      const up = Animated.timing(anim, {
        toValue: 1,
        duration: dur,
        easing: Easing.inOut(Easing.sin),
        useNativeDriver: true,
      });
      const down = Animated.timing(anim, {
        toValue: 0,
        duration: dur,
        easing: Easing.inOut(Easing.sin),
        useNativeDriver: true,
      });
      return Animated.loop(Animated.sequence([up, down]));
    });

    // stagger start for natural effect
    Animated.stagger(120, loops).start();

    return () => loops.forEach(loop => loop.stop && loop.stop());
  }, [anims]);

  return (
    <View
      pointerEvents="none"
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {stars.map((s, i) => {
        const anim = anims[i];
        const translateY = anim.interpolate({
          inputRange: [0, 1],
          outputRange: [-6, 6],
        });
        const scale = anim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0.9, 1.06, 0.95],
        });
        const opacity = anim.interpolate({
          inputRange: [0, 1],
          outputRange: [s.opacity * 0.5, s.opacity],
        });

        return (
          <Animated.Text
            key={i}
            style={{
              position: 'absolute',
              left: s.left,
              top: s.top,
              color: '#FFFFFF',
              fontSize: s.size,
              transform: [
                { translateY },
                { scale },
                { rotate: `${(i % 3) * 12 - 6}deg` },
              ],
              opacity,
              includeFontPadding: false,
            }}
          >
            {s.char}
          </Animated.Text>
        );
      })}
    </View>
  );
};

const Home = () => {
  const quickCards = [
    { title: 'Homework', subtitle: '3 pending', icon: Images.cap },
    { title: 'Timetable', subtitle: 'View', icon: Images.cap },
    { title: 'Notifications', subtitle: '2 new', icon: Images.cap },
    { title: 'Exams', subtitle: 'Upcoming', icon: Images.cap },
    { title: 'Results', subtitle: 'Check', icon: Images.cap },
    { title: 'Messages', subtitle: 'New', icon: Images.cap },
    { title: 'Library', subtitle: 'Borrowed', icon: Images.cap },
    { title: 'Transport', subtitle: 'Status', icon: Images.cap },
    { title: 'Profile', subtitle: 'Edit', icon: Images.cap },
  ];

  // chunk into rows of 3
  const rows = [];
  for (let i = 0; i < quickCards.length; i += 3) {
    rows.push(quickCards.slice(i, i + 3));
  }

  return (
    <LinearGradient
      colors={[Colors.studentBackground1, Colors.studentBackground2]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <Stars />

      <View style={[globalStyle.p16, globalStyle.mt20]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.circle}>
            <Image source={Images.cap} style={styles.cap} />
          </View>
          <Image source={Images.logo} style={{ height: 100, width: 100 }} />
        </View>
        <View style={{ marginTop: 5, gap: 8 }}>
          <Text style={{ ...Fonts.Bold.large, color: '#fff' }}>
            Lakshit Devjani
          </Text>
          <Text style={{ ...Fonts.Regular.medium, color: '#fff' }}>
            Student ID: 123456 | Roll No : 26
          </Text>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor: '#fff',
              borderRadius: 12,
              width: 200,
              alignItems: 'center',
            }}
          >
            <Text style={{ ...Fonts.Bold.medium }}>
              Class - 12th | Year-2025
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardLeft]}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 50,
              opacity: 1,
            }}
          >
            <Image
              source={Images.attendance}
              style={{
                height: 70,
                width: 70,
                // tintColor: Colors.CardBackground,
              }}
            />
          </View>
          <Text style={{ ...Fonts.Bold.heading, color: '#ffff' }}>80.38 %</Text>
          <Text style={{ ...Fonts.Regular.small, color: '#fff', marginTop: 6 }}>
            Attendance
          </Text>
        </View>

        <View style={[styles.card, styles.cardRight]}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 50,
            }}
          >
            <Image
              source={Images.fees}
              style={{
                height: 70,
                width: 70,
                // tintColor: Colors.CardBackground,
              }}
            />
          </View>
          <Text style={{ ...Fonts.Bold.heading, color: '#ffff' }}>₹ 6400</Text>
          <Text style={{ ...Fonts.Regular.small, color: '#fff', marginTop: 6 }}>
            Fees Due
          </Text>
        </View>

        <ScrollView
          // style={[styles.content, { flex: 1 }]}
          contentContainerStyle={{
            paddingBottom:120,
            marginTop: 25,
            flexGrow: 1,
            zIndex:9999
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* render 3x3 quick cards */}
          {rows.map((row, rIdx) => (
            <View style={styles.cardRow} key={`row-${rIdx}`}>
              {row.map(card => (
                <View
                  key={card.title}
                  style={{
                    width: '30%', // fixed equal width for each card
                    alignItems: 'center',
                  }}
                >
                  {/* Card Box (fills wrapper width) */}
                  <View style={[styles.cards, { width: '100%' }]}>
                    <Image source={card.icon} style={styles.cardimage} />
                    <Text
                      style={{
                        ...Fonts.Regular.small,
                        color: '#fff',
                        marginTop: 6,
                      }}
                    >
                      {card.subtitle}
                    </Text>
                  </View>

                  {/* Title outside (below card) */}
                  <Text
                    style={{
                      ...Fonts.Bold.medium,
                      color: '#000',
                      marginTop: 10,
                      textAlign: 'center',
                    }}
                  >
                    {card.title}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Home;
