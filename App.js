import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailScreen';


// const apiKey = 'SrT7fu3gioKw5Fuz83_hptFJLD-da39F0fMD5lD3VD8'
// let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${10}`





const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={HomeScreen}/>
        <Stack.Screen name="Art" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: "100%",
    height: "100%",
    textAlign: 'center',
  },
});
