import { StyleSheet } from 'react-native';

import { colors, fonts } from 'assets/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  loading: {
    padding: 20
  },
  containerLoading: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  textLoading: {
    color: colors.text.light
  }
});