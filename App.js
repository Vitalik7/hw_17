import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/components/home';
import Login from './app/components/login';
import Register from './app/components/register';
import Facebook from './app/components/facebook';
import Chat from './app/components/chat';


const UsersManager = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
  Register: {screen: Register},
  Facebook: {screen: Facebook},
  Chat: {screen: Chat},
})

export default UsersManager;
