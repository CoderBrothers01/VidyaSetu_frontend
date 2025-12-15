import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
  card: {
    width: '30%',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  classCard: {
    width: '30%',
    backgroundColor: '#fff',
    paddingVertical: 18,
    marginBottom: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  classText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: '30%',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },

  totalBox: {
    backgroundColor: '#eef2ff',
  },

  presentBox: {
    backgroundColor: '#e7f8ee',
  },

  absentBox: {
    backgroundColor: '#ffeaea',
  },
});
export default styles;
