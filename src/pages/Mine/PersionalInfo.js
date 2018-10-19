import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'
import Iconfont from 'react-native-vector-icons/Iconfont'

export default class PersionalInfo extends Component {
  static navigationOptions = {
    title: 'Mine',
    headerTitleStyle: {
      justifyContent: 'center',
    },
  }
  navigateBack = () => {
    this.props.navigation.navigate('Mine')
  }

  render() {
    return (
      <View>
        <StatusBar barStyle='dark-content' translucent={true} backgroundColor='transparent'/>
        <Header backgroundColor='#fff'>
          <TouchableOpacity onPress={this.navigateBack} style={{padding: 10}}>
            <Iconfont name='youjiantou' size={18} color='#6C6C6C'/>
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: '#3e3e3e'}}>个人资料</Text>
        </Header>
        <Text>123</Text>
      </View>
    )
  }
}

