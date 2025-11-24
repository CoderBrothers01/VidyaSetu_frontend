import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0, // touch the bottom
    backgroundColor: '#fff',
    height: '80%',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingTop: 20, // room for floating cards
    paddingHorizontal: 16,
  },
});

export default styles;