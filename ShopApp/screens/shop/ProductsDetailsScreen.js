import React from 'react';
import { View, ScrollView, Text, Button, Image, StyleSheet, ColorPropType } from 'react-native';
import { useSelector } from "react-redux";
import Colors from '../../constants/Colors';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state =>
        state.products.allProducts.find(prod => prod.id === productId)
    );
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.buttonContainer}>
                <Button color={Colors.primary} title="Add to char" />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{selectedProduct.title}</Text>
                <Text style={styles.price}>{selectedProduct.price} €</Text>
                <Text style={styles.description}>{selectedProduct.description}</Text>
            </View>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam("productTitle")
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    buttonContainer: {
        alignItems: "center",
        marginVertical: 10
    },
    detailsContainer: {
        alignItems: "center",
        marginHorizontal: 20,
    },
    title: {
        fontSize: 18
    }


})

export default ProductDetailsScreen;