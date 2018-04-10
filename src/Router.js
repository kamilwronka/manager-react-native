import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';

const RootStack = StackNavigator({
    Home: {
      screen: LoginForm,
    },
  },
  {
    initialRouteName: 'Home',
    }   
    );
  
  export default class RouterComponent extends Component {
    render() {
      return <RootStack />;
    }
  }