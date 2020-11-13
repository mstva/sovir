import * as React from 'react';
import {StyleSheet, View, Text, Image, FlatList, ScrollView} from 'react-native';
import {width, height} from "../constants/Layout";
import products from "../data/products";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import CollectionGrid from "../components/CollectionGrid";
import Colors from "../constants/Colors";

const homeBanner = require('../../assets/images/home_banner.jpg')

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={homeBanner} style={styles.banner}/>
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayText}>Street Clothes</Text>
        </View>
      </View>
      <ProductList productsList={{ label: 'Sale', description: 'Super Summer Sale' }}/>
      <ProductList productsList={{ label: 'New', description: 'You’ve never seen it before!' }}/>
      <CollectionGrid/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 0,
    height: 330,
    alignItems: "flex-start",
    justifyContent: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold"
  },
  banner: {
    width: width,
    height: 200
  },
});
