import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

import MealItem from '../components/complex/MealItem';
import MealList from '../components/complex/MealList';
import BodyText from '../components/simple/BodyText';

const CategoryMealsScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    function renderMealItem(itemData) {
        const isFav = favoriteMeals.some(meal => meal.id === itemData.item.id)
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
                            isFav: isFav,
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
    if (!displayedMeals || displayedMeals.length === 0) {
        return <View style={styles.noMealsText}>
            <BodyText>There are no meals available for your diet</BodyText>
        </View>
    }
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

const styles = StyleSheet.create({
    noMealsText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CategoryMealsScreen;