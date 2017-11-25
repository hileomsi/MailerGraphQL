import React, { Component } from 'react'
import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types';

import Header from './components/Header';
import ItemMessage from './components/ItemMessage';

import { GraphQL } from './graphql';
import { styles } from './styles';

class Inbox extends Component {

  static navigationOptions = {
    header: ({ navigation }) => (<Header navigation={navigation} />)
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    subscriptionToMore: PropTypes.func.isRequired
  }

  onPressMessage = (message) => {
    this.props.navigation.navigate('Message', { message });
  }

  componentDidMount() {
    this.props.subscriptionToMore();
  }

  render() {
    const { data } = this.props;
    
    return (
      <Choose>
        <When condition={data.loading}>
          <View style={styles.containerLoading}>
            <ActivityIndicator style={styles.loading}/>
            <Text style={styles.textLoading}>Carregando...</Text>
          </View>
        </When>
        <Otherwise>
          <FlatList
            style={styles.container}
            data={data.allMessages}
            keyExtractor={data => data.id}
            renderItem={({ item }) => <ItemMessage message={item} onPress={this.onPressMessage} />}
          />
        </Otherwise>
      </Choose>
    )
  }
}

export default GraphQL(Inbox);