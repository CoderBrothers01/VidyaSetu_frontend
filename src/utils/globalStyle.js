import { StyleSheet } from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

const globalStyle = StyleSheet.create({
  // 📌 Core Layout
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },

  // 📌 Typography
  headertitle: {
    textAlign: 'center',
    marginTop: 20,
    ...Fonts.Bold.large,
    color: '#445669',
  },

  // 📌 Components
  card: {
    backgroundColor: '#445669',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#445669',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    height: 50,
    marginTop: 20,
  },
  btntext: {
    color: '#fff',
    ...Fonts.Italic.medium,
  },

  m4: { margin: 4 },
  m8: { margin: 8 },
  m12: { margin: 12 },
  m16: { margin: 16 },
  m20: { margin: 20 },

  p4: { padding: 4 },
  p8: { padding: 8 },
  p12: { padding: 12 },
  p16: { padding: 16 },
  p20: { padding: 20 },

  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },
  pt10: { paddingTop: 10 },
  pb10: { paddingBottom: 10 },
});

export default globalStyle;
