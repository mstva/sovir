import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback, SafeAreaView, TextInput} from 'react-native';
import Colors from "../../../constants/Colors";
import {AntDesign, Entypo} from "@expo/vector-icons";
import CartProduct from "../Components/CartProduct";
import {width} from "../../../constants/Layout";
import {useNavigation} from "@react-navigation/native";

function CheckoutButton() {
    const navigation = useNavigation()
    return(
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('CheckoutScreen')}}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Check Out</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

function PromoCodeInput() {
    return(
        <View style={styles.promoCodeContainer}>
            <TextInput placeholder={'Enter your promo code'} style={styles.promoCodeInput}/>
            <Entypo name="arrow-with-circle-right" size={30} color="white" style={styles.arrowIcon} />
        </View>
    )
}

function TotalAmount() {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginVertical: 10 }}>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: "bold" }}>Total Amount: </Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold" }}>$120</Text>
        </View>
    )
}

export default function CartScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.cartTitle}>My Cart</Text>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <PromoCodeInput/>
            <TotalAmount/>
            <CheckoutButton/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    cartTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        color: 'white'
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#EF3651',
        borderRadius: 10,
        width: width - 40,
        height: 60,
        justifyContent: "center"
    },
    buttonTitle: {
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: "bold",
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
    },
    promoCodeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width-40,
        marginHorizontal: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#2A2C36',
        marginVertical: 10
    },
    promoCodeInput: {
        paddingStart: 20,
        width: width-40,
    },
    arrowIcon: {
        alignSelf: "center"
    },

});
