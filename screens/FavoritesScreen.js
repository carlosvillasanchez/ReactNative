import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/complex/MealList';
import MealItem from '../components/complex/MealItem';
import BodyText from '../components/simple/BodyText';


const FavoritesScreen = props => {
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

    if (!favoriteMeals || favoriteMeals.length === 0) {
        return <View style={styles.noFav}>
            <BodyText>Yo have no favorite meals, so far...</BodyText>
        </View>
    }
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

const styles = StyleSheet.create({
    noFav: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});


export default FavoritesScreen;