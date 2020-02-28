import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from "../constants/colors";

import { Ionicons } from "@expo/vector-icons"
import FilterScreen from '../screens/FilterScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    },
    headerTintColor: Colors.background,
    headerTitle: 'Meals app',
    //mode: 'modal',
    initialRouteName: 'Categories',
}

// First argument the screens, second configuration
const MealsNavigation = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavoriteNavigation = createStackNavigator({
    Favorite: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FilterNavigation = createStackNavigator({
    Filter: FilterScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions
});


const MealFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={35}
                        color={(tabInfo.focused) ? Colors.primary : tabInfo.tintColor}
                    />
                );
            }
        }
    },
    Favorites: {
        screen: FavoriteNavigation,
        navigationOptions: {
            //tabBarLabel: ""
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={35}
                        color={tabInfo.tintColor}
                    />
                );
            }
        }
    }
}, {
    tabBarOptions: {
        // Visual configuration of the tab
        activeTintColor: Colors.secondary2,
        showLabel: false,
    }
});

const MainNavigator = createDrawerNavigator({
    MealsFavNavigator: {
        screen: MealFavTabNavigator, navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigation
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});



export default createAppContainer(MainNavigator);