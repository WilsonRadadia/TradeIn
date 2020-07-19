import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from './Menu_Shopkeeper';
import Dashboard from './Dashboard_Shopkeeper';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Products';
import Order_Category from '../screens/Order_Category';
import Order_Product from '../screens/Order_Product'
import Order_List from '../screens/Order_List';
import View_Cart from '../screens/View_Cart';

import One from '../screens/PROFILE/One';
import Two from '../screens/PROFILE/Three';

import Repo from './screens/Report';
import Splash from './screens/SPLASH/Splash';
import Repone from './screens/Report_one';
import Repotwo from './screens/Report_two';
import Repothree from './screens/Report_three';

import ViewCart from '../screens/ViewCart'

export default createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        header: null
      },
    },
    Dashboard: {
      screen: Dashboard,
    },
    View_Category: {
      screen: View_Category,
      navigationOptions: {
        header: null
      },
    },
    View_Product: {
      screen: View_Product,
      navigationOptions: {
        header: null
      },
    },
    Order_Category: {
      screen: Order_Category,
      navigationOptions: {
        header: null
      },
    },
    Order_Product: {
      screen: Order_Product,
      navigationOptions: {
        header: null
      },
    },
    Order_List: {
      screen: Order_List,
      navigationOptions: {
        header: null
      },
    },
    View_Cart: {
      screen: View_Cart,
      navigationOptions: {
        header: null
      },
    },

    ViewCart: {
      screen: ViewCart,
      navigationOptions: {
        header: null
      },
    },

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

    Repone: {
      screen: Repone,
      navigationOptions: {
        header: null
      },
    },

    Repotwo: {
      screen: Repotwo,
      navigationOptions: {
        header: null
      },
    },
    Repothree: {
      screen: Repothree,
      navigationOptions: {
        header: null
      },
    },

    Repo: {
      screen: Repo,
      navigationOptions: {
        header: null
      },
    },

    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      },
    },

  },
  {
    initialRouteName: 'Report',
  },
);
