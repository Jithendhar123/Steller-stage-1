import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SpaceCraftScreen from "./screens/SpaceCraft";
import StraMapScreen from "./screens/StraMap";
import DailyPicScreen from "./screens/DailyPic";



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StraMap" component={StraMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

