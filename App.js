import React,{Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer, StackNavigator } from 'react-navigation';
import Two from './screens/Report/Report';
import One from './screens/SPLASH/Splash';
import Three from './screens/Report/Report_one';
import Four from './screens/Report/Report_two';
import Five from './screens/Report/Report_three';
import Jan from './screens/Report/Rejan';


const AppNavigator = createStackNavigator({

  One: {
    screen: One,
    navigationOptions: {
      header: null
    },
  },

  Two: {
    screen: Two,
    navigationOptions: {
      header: null
    },
  },

  Three: {
    screen:Three,
    navigationOptions: {
      header: null
    },
  },
  Four: {
    screen: Four,
    navigationOptions: {
      header: null
    },
  },
  Five: {
    screen: Five,
    navigationOptions: {
      header: null
    },
  },
  Jan: {
    screen:Jan,
    navigationOptions: {
      header: null
    },
  },
},
  {
    initialRouteName: 'Two',
  },
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;