import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet,Tex, View } from 'react-native';
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

export default function App() {
  return (
    <View style ={styles.container}>\
    <HomeScreen/>
    <StatusBar style="auto" />


    </View>
  );
}

const styles=StyleSheet.create({
container : {
flex:1,
backgroundColor: '#fff',
alignItems: "center",
justifyContent: 'center',
},
});