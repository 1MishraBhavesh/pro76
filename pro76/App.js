
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StarMapScreen from './Screens/StarMap'
import SpaceCraftsScreen from './Screens/SpaceCrafts'
import DailyPicScreen from './Screens/DailyPic'
import HomeScreen from './Screens/HomeScreen'
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home"
       screenOptions={{headerShown:false}}
       
      >
          <Stack.Screen name="Home" component={HomeScreen}  />


        <Stack.Screen name="Star Map" component={StarMapScreen}  />

        <Stack.Screen name="Space Crafts" component={SpaceCraftsScreen}  />

        <Stack.Screen name="Daily pic"component={DailyPicScreen}  />
      </Stack.Navigator>
          </NavigationContainer>
  );
}

const Stack=createStackNavigator()

