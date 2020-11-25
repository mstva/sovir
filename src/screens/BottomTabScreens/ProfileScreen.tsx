import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image, TouchableWithoutFeedback, FlatList, ScrollView} from 'react-native';
import Colors from "../../constants/Colors";
import {profile_categories} from "../../data/categories";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";


const ProfileAvatar = require('../../../assets/images/profile_avatar.png')

export default function ProfileScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileTextContainer}>
          <Text style={styles.profileText}>My Profile</Text>
      </View>
      <View style={styles.profileInfoContainer}>
          <Image source={ProfileAvatar} style={styles.profileAvatar}/>
          <View style={styles.profileInfo}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Matilda Brown</Text>
              <Text style={{ color: 'white' }}>matildabrown@mail.com</Text>
          </View>
      </View>
      <ScrollView style={styles.profileList}>
          <FlatList
              data={profile_categories}
              renderItem={({item}) => (
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('MyOrderScreen', {name: item.name})}>
                      <View style={styles.list}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                              <View>
                                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 2 }}>{item.name}</Text>
                                  <Text style={{ color: 'white', fontSize: 12, marginBottom: 10 }}>{item.info}</Text>
                              </View>
                              <Ionicons name="ios-arrow-forward" size={24} color="white" />
                          </View>
                          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>
                      </View>
                  </TouchableWithoutFeedback>
              )}
          />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
    profileTextContainer: {
      marginHorizontal: 20,
        marginVertical: 10
    },
    profileText: {
      fontWeight: "bold",
        fontSize: 30,
        color: 'white'
    },
    profileInfoContainer: {
      flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10
    },
    profileInfo: {
      flexDirection: "column",
        alignSelf: "center",
        alignContent: "center",
        marginStart: 10,
        color: 'white'
    },
    profileAvatar: {
      width: 60,
        height: 60,
        borderRadius: 30
    },
    profileList: {

    },
    list: {
      marginVertical: 5,
        marginHorizontal: 20
    }
});
