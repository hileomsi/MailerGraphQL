import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Header = ({ navigation, title }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Icon name='angle-left' size={20} style={styles.back}/>
      </TouchableWithoutFeedback>
      <View style={styles.containerText}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  </View>
);

Header.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
