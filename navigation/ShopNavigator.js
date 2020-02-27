// import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import AllProductsScreen from '../screens/shop/AllProductsScreen';

import Colors from '../constants/Colors'
import { Provider } from 'react-redux';


// Main Screen
const ProductsNavigator = createStackNavigator({
    AllProducts: AllProductsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator);