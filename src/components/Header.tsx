import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import {HeaderPage} from "../../types";
import products from "../data/products";
import ProductItem from "./ProductItem";
import {useNavigation} from "@react-navigation/native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";

export type HeaderPageProps = { headerPage: HeaderPage }

export default function Header(props: HeaderPageProps) {
    const {headerPage} = props
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                <Ionicons name="ios-arrow-back" size={24} color="white" />
            </TouchableWithoutFeedback>
            <Text style={styles.headerTitle}>{headerPage.title}</Text>
            <MaterialIcons name="search" size={24} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10
    },
    headerTitle: {
        color: Colors.dark.text
    }
});
