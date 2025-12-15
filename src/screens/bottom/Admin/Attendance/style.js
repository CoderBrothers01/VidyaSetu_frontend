import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
  /* Tabs */
  btn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    width: '45%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: Colors.ButtonPrimary,
  },
  activeText: {
    color: '#fff',
  },

  activeBtn2: {
    backgroundColor: '#706a6aff',
  },
  activeText2: {
    color: '#fff',
  },

  /* Card */
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  accentLine: {
    height: 4,
    width: 40,
    backgroundColor: Colors.teacherBackground1,
    borderRadius: 10,
    marginBottom: 10,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  classTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.Primary,
  },

  subTitle: {
    fontSize: 12,
    color: Colors.gray,
  },

  /* Stats */
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

  statLabel: {
    fontSize: 12,
    marginBottom: 4,
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },

  card2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
  },

  status: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  presentText: {
    backgroundColor: Colors.ButtonSecondary,
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  absentText: {
    backgroundColor: 'red',
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
});

export default styles;
