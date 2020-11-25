import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import ProductGrid from "../components/ProductGrid";
import Colors from "../constants/Colors";
import {width} from "../constants/Layout";
import Header from "../components/Header";


export default function SaleScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header headerPage={{title: 'Summer Sale'}}/>
            <ProductGrid/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        width: width,
    },
});
