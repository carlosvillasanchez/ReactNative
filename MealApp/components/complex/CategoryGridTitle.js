import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
import { withOrientation } from 'react-navigation';
import Card from '../simple/Card';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CategoryGridTitle = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableWithoutFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={styles.touchableComponent} onPress={props.onSelected}>
                <Card style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
                </Card>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 2,
        height: 150,
    },
    touchableComponent: {
        width: '100%',
        height: '100%',
        //alignItems: 'center',
        //justifyContent: 'center',
        padding: 18
    },
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans',
        textAlign: 'right',
        fontSize: 17,
    }
})

export default CategoryGridTitle;

