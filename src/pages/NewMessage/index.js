import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, NativeModules, Platform } from 'react-native';
import PropTypes from "prop-types";

import Header from 'components/Header';
import { GraphQL } from './graphql';
import { styles } from './styles';

class NewMessage extends Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header 
        navigation={navigation} 
        title='Nova Mensagem' 
      />
    )
  }

  static propTypes = {
    mutate: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    to: '',
    subject: '',
    text: ''
  }

  submit = async () => {
    try {
      if(!this.state.to || !this.state.text || !this.state.subject) {
        return alert('Preencha os campos meu amiguinho 😌');
      } 
    
      await this.props.mutate({
        variables: { 
          to: this.state.to,
          from: 'Hileo',
          text: this.state.text,
          subject: this.state.subject
        }
      });

      this.props.navigation.goBack();
    } catch(err) {  
      alert('Erro ao cadastrar');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containt}>
          <TextInput
            style={styles.input}
            onChangeText={to => this.setState({ to })}
            value={this.state.to}
            placeholder='Para quem?'
          />
          <TextInput
            style={styles.input}
            onChangeText={subject => this.setState({ subject })}
            value={this.state.subject}
            placeholder='Qual assunto?'
          />    
        </View>   
        <View style={styles.contentMessage}> 
          <TextInput
            style={styles.message}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder='Digite uma mensagem...'
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.submit} style={styles.submit}>
            <Text style={styles.textSubmit}>Enviar mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default GraphQL(NewMessage);