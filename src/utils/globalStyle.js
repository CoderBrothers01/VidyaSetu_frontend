import { StyleSheet } from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

const globalStyle = StyleSheet.create({
  // 📌 Core Layout
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },

  font12: {
    ...Fonts.Regular.small,
    color: Colors.TextPrimary,
  },

  font12B: {
    ...Fonts.Regular.small,
    color: Colors.TextSecondary,
  },
  font14: {
    ...Fonts.Regular.medium,
    color: Colors.TextPrimary,
  },
  font16: {
    ...Fonts.Regular.large,
    color: Colors.TextPrimary,
  },

  font18: {
    ...Fonts.Regular.xLarge,
    color: Colors.TextPrimary,
  },

  font20: {
    ...Fonts.Regular.xxLarge,
    color: Colors.TextPrimary,
  },

  // --- Secondary color variants for all sizes (regular) ---
  font14B: {
    ...Fonts.Regular.medium,
    color: Colors.TextSecondary,
  },
  font16B: {
    ...Fonts.Regular.large,
    color: Colors.TextSecondary,
  },

  font18B: {
    ...Fonts.Regular.xLarge,
    color: Colors.TextSecondary,
  },

  font20B: {
    ...Fonts.Regular.xxLarge,
    color: Colors.TextSecondary,
  },

  // Bold variants (same sizes as font12/14/16)
  font12Bold: {
    ...Fonts.Bold.small,
    color: Colors.TextPrimary,
  },
  font14Bold: {
    ...Fonts.Bold.medium,
    color: Colors.TextPrimary,
  },
  font16Bold: {
    ...Fonts.Bold.large,
    color: Colors.TextPrimary,
  },

  font18Bold: {
    ...Fonts.Bold.xLarge,
    color: Colors.TextPrimary,
  },

  font20Bold: {
    ...Fonts.Bold.xxLarge,
    color: Colors.TextPrimary,
  },

  // --- Bold secondary variants ---
  font12BoldB: {
    ...Fonts.Bold.small,
    color: Colors.TextSecondary,
  },
  font14BoldB: {
    ...Fonts.Bold.medium,
    color: Colors.TextSecondary,
  },
  font16BoldB: {
    ...Fonts.Bold.large,
    color: Colors.TextSecondary,
  },

  font18BoldB: {
    ...Fonts.Bold.xLarge,
    color: Colors.TextSecondary,
  },

  font20BoldB: {
    ...Fonts.Bold.xxLarge,
    color: Colors.TextSecondary,
  },

  // Italic variants (same sizes as font12/14/16)
  font12Italic: {
    ...Fonts.Italic.small,
    color: Colors.TextPrimary,
  },
  font14Italic: {
    ...Fonts.Italic.medium,
    color: Colors.TextPrimary,
  },
  font16Italic: {
    ...Fonts.Italic.large,
    color: Colors.TextPrimary,
  },

  font18Italic: {
    ...Fonts.Italic.xLarge,
    color: Colors.TextPrimary,
  },

  font20Italic: {
    ...Fonts.Italic.xxLarge,
    color: Colors.TextPrimary,
  },

  // --- Italic secondary variants ---
  font12ItalicB: {
    ...Fonts.Italic.small,
    color: Colors.TextSecondary,
  },
  font14ItalicB: {
    ...Fonts.Italic.medium,
    color: Colors.TextSecondary,
  },
  font16ItalicB: {
    ...Fonts.Italic.large,
    color: Colors.TextSecondary,
  },

  font18ItalicB: {
    ...Fonts.Italic.xLarge,
    color: Colors.TextSecondary,
  },

  font20ItalicB: {
    ...Fonts.Italic.xxLarge,
    color: Colors.TextSecondary,
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
    ...Fonts.Bold.heading,
    color: '#ffff',
  },

  whitecontainer: {
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
  headertitle: {
    textAlign: 'center',
    marginTop: 20,
    ...Fonts.Bold.large,
    color: '#445669',
  },

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
