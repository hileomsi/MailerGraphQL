import { StyleSheet } from 'react-native';

import { colors, fonts } from 'assets/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1
  },
  containt: {
    borderBottomWidth: 1,
    borderBottomColor: colors.default,
    marginBottom: 10
  },
  submit: {
    height: 50,
    backgroundColor: '#5DBCC6',
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderRadius: 20,
    height: 34, 
    borderColor: colors.default, 
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  contentMessage: {
    flex: 1
  },
  textSubmit: {
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 'bold'
  }
});
