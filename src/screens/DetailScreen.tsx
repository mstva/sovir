import * as React from 'react';
import {StyleSheet, View, Text, Image, FlatList, SafeAreaView} from 'react-native';
import Colors from "../constants/Colors";
import {height, width} from "../constants/Layout";
import Header from "../components/Header";
import {useNavigation, useRoute} from "@react-navigation/native";


export default function DetailScreen() {
    const navigation = useNavigation()
    const route = useRoute()
    const {name, brand, description, product_images, price, rating} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <Header headerPage={{ title: `${name} Detail` }}/>
            <View style={styles.productImages}>
                <FlatList
                    data={product_images}
                    renderItem={({item}) => (<Image source={item.image_name} style={styles.productImage}/>)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.productDetails}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>{brand}</Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>{name}</Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>{rating}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>${price}</Text>
                </View>
            </View>
            <View style={styles.productDescription}>
                <Text style={{ fontSize: 12, color: 'white' }}>{description}</Text>
            </View>
            <View style={styles.addToCartContainer}>
                <Text style={styles.addToCartText}>Add to cart</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        width: width,
    },
    productImages: {

    },
    productImage: {
        width: 210,
        height: height/2,
        resizeMode: "contain"
    },
    productDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10
    },
    productDescription: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    addToCartContainer: {
        backgroundColor: 'red',
        width: width - 100,
        height: 60,
        borderRadius: 15,
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    },
    addToCartText: {
        fontSize: 18,
        fontWeight: "bold",
    }
});
