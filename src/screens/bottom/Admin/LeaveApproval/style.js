import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/Colors';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    width: '30%',
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
  card: {
    width: '95%',
    backgroundColor: '#fff',
    height: 100,
    elevation: 4,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
