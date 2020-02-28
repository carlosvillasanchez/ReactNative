import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/simple/CustomHeaderButton'

// Components
import CategoryGridTitle from '../components/complex/CategoryGridTitle'


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onSelected={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            CategoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}; 

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        overflow: "visible"
    }
});

export default CategoriesScreen;