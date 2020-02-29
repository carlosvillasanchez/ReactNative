import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = props => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price} €</Text>
            </View>
            <View style={styles.buttonsContiner}>
                <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={props.onViewDetail}
                />
                <Button
                    color={Colors.primary}
                    title="To Cart"
                    onPress={props.onAddToCart}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        // IOS
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        // ANDROID
        elevation: 5,
        // BOTH
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    detailsContainer: {
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonsContiner: {
        width: "100%",
        height: "25%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: 'open-sans'
    },
    price: {
        fontSize: 14,
        color: Colors.grey,
        fontFamily: 'open-sans'
    }
})

export default ProductItem;