import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';

// Own components
import Header from './components/complex/Header';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FilterScreen from './screens/FilterScreen';
import MealDetailScreen from './screens/MealDetailScreen';
// Constants
import Colors from './constants/colors';

import MealsNavigator from './navigation/MealsNavigation';
import mealsReducer from './store/reducers/meals';

// For more efficiency
useScreens();

// To have several reducers
const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {

  let [dataLoaded, setDataLoaded] = useState(false);


  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }



  return (
    <Provider store={store}><MealsNavigator /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
});
