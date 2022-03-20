import React from 'react';
import {useFonts} from 'expo-font'
import { StyleSheet, View, StatusBar } from 'react-native';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Home } from './SRC/screens/home';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })
  
  if (!fontsLoaded){
    return <AppLoading/>
  }


  return (
    <>
      <StatusBar 
      barStyle={"light-content"}
      backgroundColor={"transparent"}
      translucent
      />
      <Home/>
    </>
  );
}



