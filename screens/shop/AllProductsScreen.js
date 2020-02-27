import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const AllProductsScreen = props => {
    const products = useSelector(state => state.products.allProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => { }}
                    onAddToCart={() => { }}
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
