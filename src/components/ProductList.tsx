import * as React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {ProductsList} from "../../types";
import products from "../data/products";
import ProductItem from "./ProductItem";

export type ProductListProps = { productsList: ProductsList }

export default function ProductList(props: ProductListProps) {
    const { productsList } = props
    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{productsList.label}</Text>
                    <Text style={styles.description}>{productsList.description}</Text>
                </View>
                <Text style={styles.action}>View all</Text>
            </View>
            <FlatList
                data={products}
                renderItem={({item}) => (<ProductItem product={item}/>)}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    sectionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center",
        alignContent: "center"
    },
    labelContainer: {
        flexDirection: "column"
    },
    label: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#ffffff'
    },
    description: {
        fontSize: 14,
        color: '#ffffff'
    },
    action:  {
        justifyContent: "center",
        alignSelf: "center",
        color: '#ffffff'
    }
});