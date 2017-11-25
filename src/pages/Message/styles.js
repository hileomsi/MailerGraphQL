import { StyleSheet } from 'react-native';

import { colors, fonts } from 'assets/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomColor: colors.default,
    borderBottomWidth: 1
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
  content: {
    paddingTop: 20,
    fontSize: fonts.small,
    color: colors.text.light
  }
});
