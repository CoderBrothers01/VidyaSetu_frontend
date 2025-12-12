import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0, // touch the bottom
    backgroundColor: '#fff',
    height: '63%',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingTop: 56, // room for floating cards
    paddingHorizontal: 16,
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.CardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  cap: {
    width: 35,
    height: 35,
  },

  card: {
    position: 'absolute',
    top: '-14%',
    width: '42%',
    height: '32%',
    borderRadius: 12,
    backgroundColor: 'hsla(190, 63%, 42%, 90.00)',
    paddingHorizontal: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },

  cardLeft: {
    left: 40,
  },

  cardRight: {
    right: 40,
  },

  content: {
    flex: 1,
    marginTop: 10,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 4,
    marginTop: 20,
    width: '100%',
    zIndex: 10,
  },

  cards: {
    width: '100%',
    // height: '60%',
    backgroundColor: Colors.CardBackground,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
  },
  
  cardimage: {
    width: 36,
    height: 36,
    tintColor: '#fff',
    marginBottom: 8,
  },
});

export default styles;
