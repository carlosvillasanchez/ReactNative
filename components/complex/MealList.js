import React from 'react';

import { View, FlatList, StyleSheet } from 'react-native';

const MealList = props => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={props.renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList
