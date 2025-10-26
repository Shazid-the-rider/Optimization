import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, InteractionManager,StyleSheet } from "react-native";
import { HomePage } from './Pages/HomePage';

export default function App() {


  return (
    <View style={styles.container}>
       <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
