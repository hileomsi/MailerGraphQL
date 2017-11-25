import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>RocketMailer</Text>
    <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>
      <Icon style={styles.new} name="send-o" size={20} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Header;
