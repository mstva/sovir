import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CategoryList from "../../components/CategoryList";
import {kids_categories} from "../../data/categories";
import Colors from "../../constants/Colors";

export default function DeliveredTabScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.orderContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                    <Text style={styles.text}>Order №1947034</Text>
                    <Text style={styles.text}>05-12-2019</Text>
                </View>
                <Text style={[styles.text,{margin: 10}]}>Tracking number: IW3475453455</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                    <Text style={styles.text}>Quantity: 3</Text>
                    <Text style={styles.text}>Total Amount: 112$</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                    <Text style={styles.text}>Details</Text>
                    <Text style={styles.text}>Delivered</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    orderContainer: {
        backgroundColor: '#2A2C36',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
    }
});
