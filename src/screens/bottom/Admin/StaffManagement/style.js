import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* Stats */
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: '30%',
    borderRadius: 14,
    paddingVertical: 20,
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
