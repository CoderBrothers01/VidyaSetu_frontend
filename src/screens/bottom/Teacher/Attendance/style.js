import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 180,
    backgroundColor: Colors.CardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    gap: 8,
  },
  cardview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  tblHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
});

export default styles;
