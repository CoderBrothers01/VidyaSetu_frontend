import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

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

export default Stars;