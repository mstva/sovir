import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Product} from "../../types";
import {FontAwesome, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export type ProductItemProps = { product: Product }

export default function ProductItem(props: ProductItemProps) {
    const { product } = props
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.productImage}/>
            </View>
            <Text style={styles.productBrand}>{product.brand}</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.footer}>
                <Text style={styles.productPrice}>${product.price}</Text>
                <View style={styles.iconContainer}>
                    <FontAwesome name="heart-o" size={22} color="white"  style={styles.icon}/>
                    <MaterialIcons name="add-shopping-cart" size={24} color="white" style={styles.icon} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        margin: 5,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: 150,
        height: 200,
        borderRadius: 15,
        alignSelf: "center",
    },
    productBrand: {
        marginStart: 10,
        fontSize: 10,
        color: '#ffffff'
    },
    productName: {
        marginStart: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: '#ffffff'
    },
    productPrice: {
        fontWeight: "bold",
        color: '#ffffff'
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10
    },
    iconContainer: {
        flexDirection: "row",
    },
    icon: {
        marginEnd: 5
    },
});
