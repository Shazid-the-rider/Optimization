import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, InteractionManager,StyleSheet } from "react-native";
import { HomePage } from './Pages/HomePage';

export default function App() {
  /*const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate data fetching AFTER UI interactions finish
    const interactionHandle = InteractionManager.runAfterInteractions(() => {
      console.log("UI interactions are done. Loading data now...");

      // Simulate slow data loading
      setTimeout(() => {
        const fakeData = Array.from({ length: 20 }, (_, i) => ({
          id: i.toString(),
          name: `Product ${i + 1}`,
          price: `$${(i + 1) * 10}`,
        }));
        console.log(10);
        setProducts(fakeData);
        setLoading(false); // Hide spinner
      }, 10000);
    });

    // Cleanup in case the component unmounts early
    return () => interactionHandle.cancel();
  }, []);

  if (loading) {
    return (
      <View style={{backgroundColor:'white', flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading products...</Text>
      </View>
    );

    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 18, margin: 10 }}>{item.name} - {item.price}</Text>
      )}
  }*/

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
