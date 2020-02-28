import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { useDispatch } from "react-redux";  
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/simple/CustomHeaderButton'

import Colors from "../constants/colors";

import { setFilters } from '../store/actions/meals'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>
                {props.label}
            </Text>
            <Switch
                trackColor={{ true: Colors.secondary1 }}
                thumbColor={Platform.OS === "android" ? Colors.background : ""} // In IOS the default, in android no
                value={props.isActive}
                onValueChange={newValue => props.setState(newValue)} />
        </View>
    )
}

const FilterScreen = props => {
    const { navigation } = props; // We get the object of props named "navigation" and store it in a new variable of the same name;
    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const dispatch = useDispatch();

    // useCallback makes sure that the function is only recreated if its dependencies changes
    const saveFilters = useCallback(() => {
        const filtersToSave = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian,
        }
        dispatch(setFilters(filtersToSave));
    }, [isVegetarian, isVegan, isLactoseFree, isGlutenFree, dispatch]);

    // This function runs whenever the state changes or the component rerenders
    useEffect(() => {
        //props.navigation.setParams({save: saveFilters}); // With this version, props is a "dependency". The function is called whenever it changes
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]) // This is so that the function only runs when the parameter (in this case the function saveFilters) changes. SaveFilters is a "dependency"

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label={"Gluten free"}
                isActive={isGlutenFree}
                setState={setGlutenFree}
            />
            <FilterSwitch
                label={"Lactose free"}
                isActive={isLactoseFree}
                setState={setLactoseFree}
            />
            <FilterSwitch
                label={"Vegan"}
                isActive={isVegan}
                setState={setVegan}
            />
            <FilterSwitch
                label={"Vegetarian"}
                isActive={isVegetarian}
                setState={setVegetarian}
            />
        </View>
    );
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam("save")} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontFamily: "open-sans-bold",
        margin: 20,
        textAlign: "center",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%",
        marginVertical: 15

    }
});

export default FilterScreen;