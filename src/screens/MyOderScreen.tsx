import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image, FlatList, ScrollView} from 'react-native';
import Colors from "../constants/Colors";
import Header from "../components/Header";
import {useRoute} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import DeliveredTabScreen from "./TopTabScreens/DeliveredTabScreen";
import ProcessingTabScreen from "./TopTabScreens/ProcessingTabScreen";
import CancelledTabScreen from "./TopTabScreens/CancelledTabScreen";

const Tab = createMaterialTopTabNavigator();

function OrderTabs() {
    return (
        <Tab.Navigator initialRouteName='Delivered' tabBarOptions={{
            activeTintColor: Colors.dark.text,
            tabStyle: {backgroundColor: Colors.dark.background},
        }}>
            <Tab.Screen name="Delivered" component={DeliveredTabScreen} />
            <Tab.Screen name="Processing" component={ProcessingTabScreen} />
            <Tab.Screen name="Cancelled" component={CancelledTabScreen} />
        </Tab.Navigator>
    );
}

export default function MyOrderScreen() {
    const routes = useRoute()
    const { name } = routes.params
    return (
        <SafeAreaView style={styles.container}>
            <Header headerPage={{ title: name }}/>
            <OrderTabs/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
});
