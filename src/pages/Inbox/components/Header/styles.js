
import { StyleSheet, Platform } from 'react-native';

import { colors, fonts } from 'assets/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5DBCC6',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
    height: 68
  },
  title: {
    color: colors.white,
    fontSize: fonts.large,
    fontWeight: 'bold'
  },
  new: {
    color: colors.white
  }
});
