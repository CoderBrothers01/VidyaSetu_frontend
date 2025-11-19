import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.CardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 8,
  },
  cap: {
    width: 70,
    height: 70,
  },
});

export default styles;
