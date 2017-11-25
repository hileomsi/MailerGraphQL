import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import styles from './styles';

const ItemMessage = ({ message, onPress }) => (
  <TouchableWithoutFeedback onPress={() => onPress(message)}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.left}>{message.to}</Text>
        <Moment 
          element={Text} 
          style={styles.right} 
          format="DD/MM"
        >
          {message.createdAt}
        </Moment>
      </View>
      <Text style={styles.subject}>{message.subject}</Text>
    </View>
  </TouchableWithoutFeedback>
);

ItemMessage.propTypes = {
  message: PropTypes.shape({
    to: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired 
};

export default ItemMessage;
