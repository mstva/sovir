import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Colors from "../../constants/Colors";
import {width} from "../../constants/Layout";
import products from "../../data/products";
import ProductItem from "../../components/ProductItem";
import {women_categories} from "../../data/categories";
import CategoryItem from "../../components/CategoryItem";


export default function WomenTabScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>SUMMER SALES</Text>
        <Text style={styles.bannerDescription}>Up to 50% sale</Text>
      </View>
      <FlatList
          data={women_categories}
          renderItem={({item}) => (<CategoryItem womenCategory={item}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
  bannerContainer: {
    flexDirection: "column",
    width: width-20,
    height: 75,
    borderRadius: 10,
    backgroundColor: '#FF3E3E',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  bannerDescription: {
    fontSize: 14
  }
});
