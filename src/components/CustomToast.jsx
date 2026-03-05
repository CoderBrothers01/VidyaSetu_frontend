import { View, Text, StyleSheet, Animated, Modal } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Colors from '../utils/Colors';

const CustomToast = ({ message, visible, type = 'success' }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const backgroundColor =
    type === 'success'
      ? Colors.ButtonPrimary
      : type === 'error'
      ? '#C62828'
      : '#333';

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.overlay} pointerEvents="none">
        <Animated.View style={[styles.toast, { opacity, backgroundColor }]}>
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toast: {
    marginBottom: 80, // 👈 space above keyboard
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CustomToast;
