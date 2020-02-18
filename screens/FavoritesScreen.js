import React from 'react';
import { StyleSheet } from 'react-native';
import MealList from '../components/complex/MealList';
import MealItem from '../components/complex/MealItem';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
    function renderMealItem(itemData) {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    });
                }}
            />
        );
    }
    let displayedMeals = MEALS.filter(
        meal => true
    );
    return (
        <MealList
            displayedMeals={displayedMeals}
            renderMealItem={renderMealItem}
        />
    );
};

// It can be a function for dinamic configuration
FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Favorites",
    }
}


export default FavoritesScreen;