import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import Colors from "../../constants/Colors";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {height, width} from "../../constants/Layout";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import MenTabScreen from "../TopTabScreens/MenTabScreen";
import WomenTabScreen from "../TopTabScreens/WomenTabScreen";
import KidsTabScreen from "../TopTabScreens/KidsTabScreen";

const Tab = createMaterialTopTabNavigator();

function CategoryTabs() {
  return (
      <Tab.Navigator initialRouteName='Women' tabBarOptions={{
          activeTintColor: Colors.dark.text,
          tabStyle: {backgroundColor: Colors.dark.background},
      }}>
          <Tab.Screen name="Women" component={WomenTabScreen} />
          <Tab.Screen name="Men" component={MenTabScreen} />
          <Tab.Screen name="Kids" component={KidsTabScreen} />
      </Tab.Navigator>
  );
}


export default function CategoryScreen() {
  return (
    <ScrollView style={styles.container}>
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Ionicons name="ios-arrow-back" size={24} color="white" />
                <Text style={styles.headerTitle}>Categories</Text>
                <MaterialIcons name="search" size={24} color="white" />
            </View>
            <CategoryTabs/>
        </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: Colors.dark.background
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
