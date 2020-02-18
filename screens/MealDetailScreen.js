import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// IMPORTANT: This avobe functions can only be used inside react components, not in anyother "normal" JS function
import { View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/simple/CustomHeaderButton'

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}

const MealDetailScreen = props => {
    let mealId = props.navigation.getParam('mealId')
    const allMeals = useSelector(state => state.meals.meals);

    let selectedMeal = allMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch(); // Object that has functions to dispatch new actions

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler]);

    // IMPORTANT!
    // The problem of this solution is that it executed when the component is fully rendered. Therefore, at the begining you will not see the title (1 sec)
    // The solution is to send it in adance. In the previous component
    // useEffect(() => {
    //     // this does not ovewrite all params, just adds a new one (append), or changes if the tag already exists.
    //     // This line alone will lead into an infinite loop, as it is chaning props, and so the component will re-render executing this line again.
    //     // That is why we use useEffect
    //     props.navigation.setParams({mealTitle: selectedMeal.title}) 
    // }, [selectedMeal])

    console.log(Ionicons)
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>
                    {selectedMeal.duration}
                </Text>
                <Text>
                    {selectedMeal.affordability.toUpperCase()}
                </Text>
                <Text>
                    {selectedMeal.complexity.toUpperCase()}
                </Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
            {/* <View style={styles.screen}>
                <Text>{selectedMeal.title}</Text>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View> */}
        </ScrollView>
    );
};

// It can be a function for dinamic configuration
MealDetailScreen.navigationOptions = (navigationData) => {
    const toggleFav = navigationData.navigation.getParam('toggleFav')

    return {
        headerTitle: navigationData.navigation.getParam('mealTitle'),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName="md-star"
                    onPress={toggleFav}
                />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center",
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around",
    },
    image: {
        width: "100%",
        height: 200
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }

});

export default MealDetailScreen;