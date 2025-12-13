import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/bottom/Home';
import Notifications from '../screens/bottom/Notification';
import Calendar from '../screens/bottom/Calendar';
import Chats from '../screens/bottom/Chat';
import Images from '../assets';
import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import globalStyle from '../utils/globalStyle';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();

const CustomCenterButton = ({ children, onPress }) => {
  return (
    <View style={{ position: 'absolute', top: -30, left: 10 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

// small star overlay used inside the gradient background
const Stars = () => {
  const stars = [
    { left: '6%', top: '10%', size: 10, opacity: 0.9, char: '✦' },
    { left: '18%', top: '6%', size: 8, opacity: 0.7, char: '★' },
    { left: '30%', top: '12%', size: 9, opacity: 0.6, char: '✦' },
    { left: '48%', top: '8%', size: 11, opacity: 0.75, char: '★' },
    { left: '68%', top: '10%', size: 8, opacity: 0.6, char: '✦' },
    { left: '84%', top: '6%', size: 9, opacity: 0.7, char: '★' },
  ];

  const animsRef = useRef(stars.map(() => new Animated.Value(Math.random())));
  const anims = animsRef.current;

  useEffect(() => {
    const loops = anims.map(anim => {
      const base = 2200 + Math.floor(Math.random() * 2000); // varied duration
      const up = Animated.timing(anim, {
        toValue: 1,
        duration: base,
        easing: Easing.inOut(Easing.sin),
        useNativeDriver: true,
      });
      const down = Animated.timing(anim, {
        toValue: 0,
        duration: base,
        easing: Easing.inOut(Easing.sin),
        useNativeDriver: true,
      });
      return Animated.loop(Animated.sequence([up, down]));
    });

    // staggered start for natural motion
    Animated.stagger(120, loops).start();

    return () => {
      loops.forEach(loop => loop.stop && loop.stop());
    };
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
          outputRange: [0.9, 1.05, 0.95],
        });
        const opacity = anim.interpolate({
          inputRange: [0, 1],
          outputRange: [s.opacity * 0.6, s.opacity],
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
                { rotate: `${(i % 3) * 10 - 5}deg` },
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

// replace TabBarWithGradient with safe-area aware version
const TabBarWithGradient = props => {
  const insets = useSafeAreaInsets();
  const gradientHeight = 60;
  const totalHeight = gradientHeight + insets.bottom;

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: totalHeight,
      }}
    >
      <LinearGradient
        colors={['#2898AE', '#2855AE']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: insets.bottom, // draw gradient above nav buttons
          height: gradientHeight,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />

      {/* stars drawn over the gradient but underneath the tab icons */}
      <Stars />

      <BottomTabBar
        {...props}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: totalHeight,
          paddingBottom: insets.bottom, // push icons above system nav
          backgroundColor: 'transparent',
        }}
      />
    </View>
  );
};

const BottomtabNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const gradientHeight = 60;

  return (
    <>
      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'flex-end',
          }}
        >
          {/* keep sheet just above tab + system nav */}
          <View
            style={{
              width: '95%',
              maxWidth: 420,
              backgroundColor: 'white',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              paddingHorizontal: 20,
              paddingTop: 24,
              paddingBottom: 28 + insets.bottom, // include inset so content isn't hidden
              alignItems: 'center',
              marginBottom: gradientHeight, // leave space for tab gradient
              alignSelf: 'center',
            }}
          >
            {/* user image */}
            <View style={{ alignItems: 'center', marginBottom: 12 }}>
              <Image
                source={Images.cap} // replace with real user image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  resizeMode: 'cover',
                }}
              />
            </View>

            {/* key - value data */}
            <View style={{ width: '100%' }}>
              {[
                { key: 'Name', value: 'Lakshit Devjani' },
                { key: 'ID', value: '123456' },
                { key: 'Roll No', value: '26' },
                { key: 'Contact', value: '+91 98765 43210' },
                {
                  key: 'Address',
                  value: '123, Example Street, City Name - 123456',
                },
              ].map(item => (
                <View
                  key={item.key}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    paddingVertical: 10, // gap between rows
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#eee',
                  }}
                >
                  <Text
                    style={[
                      globalStyle.font16Italic,
                      { flex: 1, color: '#000' },
                    ]}
                  >
                    {item.key}
                  </Text>
                  <Text
                    style={[
                      globalStyle.font16Bold,
                      { color: '#666', flex: 0.8 },
                    ]}
                  >
                    {item.value}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ marginTop: 16, alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  backgroundColor: '#2898AE',
                  paddingVertical: 10,
                  paddingHorizontal: 24,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: '600' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom Tabs with gradient background */}
      <Tab.Navigator
        tabBar={props => <TabBarWithGradient {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            ...Fonts.Italic.medium,
            color: '#fff',
          },
          tabBarStyle: { backgroundColor: 'transparent', elevation: 0 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? Images.home : Images.home}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#fff' : '#fff',
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? Images.calendar : Images.calendar}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#fff' : '#fff',
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabelStyle: { color: '#000', ...Fonts.Italic.medium },
            tabBarIcon: () => (
              <Image
                source={Images.profile}
                style={{ width: 28, height: 28, marginBottom: 8 }}
              />
            ),
            tabBarButton: props => (
              <CustomCenterButton
                {...props}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            ),
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
            },
          }}
        />

        <Tab.Screen
          name="Chat"
          component={Chats}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? Images.chat : Images.chat}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#fff' : '#fff',
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? Images.notification : Images.notification}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#fff' : '#fff',
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomtabNavigation;
