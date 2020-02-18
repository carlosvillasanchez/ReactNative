import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/complex/MealList';
import MealItem from '../components/complex/MealItem';


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
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                        }
                    });
                }}
            />
        );
    }

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList
            displayedMeals={favoriteMeals}
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