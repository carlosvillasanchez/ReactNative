import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/simple/CustomHeaderButton'

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}

const MealDetailScreen = props => {
    let mealId = props.navigation.getParam('mealId')
    let selectedMeal = MEALS.find(meal => meal.id === mealId)
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
    let mealId = navigationData.navigation.getParam("mealId");
    let selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName="md-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
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
    listItem :{
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }

});

export default MealDetailScreen;