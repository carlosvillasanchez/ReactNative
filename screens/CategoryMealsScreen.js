import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data'

import MealItem from '../components/complex/MealItem';
import MealList from '../components/complex/MealList';

const CategoryMealsScreen = props => {
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
    let catId = props.navigation.getParam("CategoryId");

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    let displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <MealList
            displayedMeals={displayedMeals}
            renderMealItem={renderMealItem}
        />
    );
};

// It can be a function for dinamic configuration
CategoryMealsScreen.navigationOptions = (navigationData) => {
    let categoryId = navigationData.navigation.getParam("CategoryId");
    let selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: selectedCategory.color,
        },
    }
}

export default CategoryMealsScreen;