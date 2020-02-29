import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import { addItem } from '../../store/actions/cart';

const AllProductsScreen = props => {
    const products = useSelector(state => state.products.allProducts);

    const dispatch = useDispatch(); // Object that has functions to dispatch new actions


    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id} 
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        console.log("ICI");
                        props.navigation.navigate('ProductDetail', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        });
                    }}
                    onAddToCart={() => { 
                        console.log("JEJE");
                        dispatch(addItem(itemData.item.id));
                    }}
                />
            )}
        />
    );
}

AllProductsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "All products",
    }
}

export default AllProductsScreen;

