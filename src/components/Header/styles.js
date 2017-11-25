import { StyleSheet, Platform } from 'react-native';

import { colors, fonts } from 'assets/styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',    
    backgroundColor: '#5DBCC6',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
    height: 68
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerText: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: colors.white,
    fontSize: fonts.large,
    fontWeight: 'bold'
  },
  back: {
    color: colors.white
  }
});
