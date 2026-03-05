import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  Easing,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import globalStyle from '../../../utils/globalStyle';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../utils/Colors';
import Images from '../../../assets';
import Fonts from '../../../utils/Fonts';
import Stars from '../../../components/CustomStars';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/slices/authSlice';

const Home = ({ navigation, route }) => {
  const user = useSelector(state => state.auth.user);
  const schoolInfo = useSelector(state => state.auth.school);
  const role = user?.role;
  const dispatch = useDispatch();
  
  const studentCards = [
    {
      title: 'Homework',
      subtitle: '3 pending',
      icon: Images.homework,
      route: 'Homework',
    },
    {
      title: 'Timetable',
      subtitle: 'View',
      icon: Images.cap,
      route: 'Timetable',
    },
    { title: 'Leave', subtitle: '2 new', icon: Images.leave, route: 'Leave' },
    { title: 'Exams', subtitle: 'Upcoming', icon: Images.cap, route: 'Exams' },
    { title: 'Results', subtitle: 'Check', icon: Images.cap, route: 'Results' },
    {
      title: 'Notice',
      subtitle: 'New',
      icon: Images.notice,
      route: 'Messages',
    },
  ];

  const principalCards = [
    {
      title: 'Students Management',
      subtitle: 'Manage',
      icon: Images.internship,
      route: 'Students',
    },
    {
      title: 'Staff Management',
      subtitle: 'Manage',
      icon: Images.team,
      route: 'Staff',
    },
    {
      title: 'Class Management',
      subtitle: 'Manage',
      icon: Images.cap,
      route: 'ClassManage',
    },
    {
      title: 'Attendance',
      subtitle: 'Reports',
      icon: Images.userAtt,
      route: 'AdminAttendance',
    },
    {
      title: 'Notices',
      subtitle: 'Create',
      icon: Images.notice,
      route: 'Notice',
    },
    {
      title: 'Fees & Finance',
      subtitle: 'Schedule',
      icon: Images.profit,
      route: 'FeesFinance',
    },
  ];

  const teacherCards = [
    {
      title: 'My Classes',
      subtitle: 'View',
      icon: Images.cap,
      route: 'TeacherTT',
    },
    {
      title: 'Attendance',
      subtitle: 'Mark',
      icon: Images.userAtt,
      route: 'TeacherAttendance',
    },
    {
      title: 'Homework',
      subtitle: 'Assign',
      icon: Images.homework,
      route: 'HomeworkAssign',
    },
    {
      title: 'Exams',
      subtitle: 'Schedule',
      icon: Images.cap,
      route: 'CreateExam',
    },
    {
      title: 'Results',
      subtitle: 'Upload',
      icon: Images.cap,
      route: 'TeacherResults',
    },
    {
      title: 'Notices',
      subtitle: 'View',
      icon: Images.notice,
      route: 'Notice',
    },
  ];

  const quickCards =
    role === 'principal'
      ? principalCards
      : role === 'teacher'
      ? teacherCards
      : studentCards;

  const rows = [];
  for (let i = 0; i < quickCards.length; i += 3) {
    rows.push(quickCards.slice(i, i + 3));
  }

  const handleLogout = () => {
    dispatch(logout());
  };

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
            {user?.name}
          </Text>
          {/* <Text style={{ ...Fonts.Regular.medium, color: '#fff' }}>
            Student ID: 123456 | Roll No : 26
          </Text> */}
          <Text style={{ ...Fonts.Regular.medium, color: '#fff' }}>
            {user?.email}
          </Text>
          <Text style={{ ...Fonts.Bold.large, color: '#fff' }}>
            {schoolInfo?.name}
          </Text>
          {user?.role === 'student' && (
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
                Class - {user?.className || 'N/A'} | Year -{' '}
                {user?.year || 'N/A'}
              </Text>
            </View>
          )}
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
                height: 55,
                width: 55,
                // tintColor: Colors.CardBackground,
              }}
            />
          </View>
          <Text
            style={{
              ...Fonts.Bold.heading,
              color: '#ffff',
              textAlign: 'center',
            }}
          >
            80.38 %
          </Text>
          <Text
            style={{
              ...Fonts.Regular.small,
              color: '#fff',
              marginTop: 6,
              textAlign: 'center',
            }}
          >
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
                height: 55,
                width: 55,
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
            paddingBottom: 120,
            marginTop: 35,
            flexGrow: 1,
            zIndex: 9999,
          }}
          showsVerticalScrollIndicator={false}
        >
          {rows.map((row, rIdx) => (
            <View style={styles.cardRow} key={`row-${rIdx}`}>
              {row.map(card => (
                <TouchableOpacity
                  key={card.title}
                  style={{
                    width: '30%',
                    alignItems: 'center',
                  }}
                  activeOpacity={0.9}
                  onPress={() => {
                    if (card.route) {
                      navigation.navigate(card.route);
                    }
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
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 100,
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity activeOpacity={0.85} onPress={handleLogout}>
          <LinearGradient
            colors={['#ff4e50', '#f00000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingVertical: 14,
              paddingHorizontal: 40,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              elevation: 8,
            }}
          >
            {/* <Icon name="logout" size={20} color="#fff" /> */}
            <Text style={{ ...Fonts.Bold.medium, color: '#fff' }}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Home;
