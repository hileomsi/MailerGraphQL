import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import Header from 'components/Header';

import { styles } from './styles';

class Message extends Component {
  static navigationOptions = {
    header: ({ navigation, scene }) => (
      <Header 
        navigation={navigation} 
        title={scene.route.params.message.from} 
      />
    )
  }

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          message: PropTypes.shape({
            subject: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    const { message } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.left}>{message.subject}</Text>
          <Moment 
            element={Text} 
            style={styles.right} 
            format="DD/MM"
          >
            {message.createdAt}
          </Moment>
        </View>
        <Text style={styles.content}>{message.text}</Text>
      </View>
    )
  }
}

export default Message;