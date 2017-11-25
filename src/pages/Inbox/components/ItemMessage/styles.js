import { StyleSheet } from 'react-native';

import { fonts, colors } from 'assets/styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: colors.default,
    borderBottomWidth: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    fontSize: fonts.small,
    color: colors.text.dark,
    fontWeight: 'bold'
  },
  right: {
    fontSize: fonts.tiny,
    color: colors.text.light
  },
  subject: {
    fontSize: fonts.small,
    color: colors.text.dark
  }
});

export default styles;
