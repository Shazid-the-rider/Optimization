import axios from "axios";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Dimensions,
    InteractionManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    VirtualizedList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "./Components/ProductCard";

const width = Dimensions.get("window").width;

export const HomePage = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [show, setShow] = useState(10);

    useEffect(() => {
        const interactionHandle = InteractionManager.runAfterInteractions(() => {
            console.log("Interaction done! Loading data...");

            setTimeout(async () => {
                try {
                    const response = await axios.get(
                        "https://dummyjson.com/products?limit=100"
                    );
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error.message);
                }
            }, 1000);
        });

        return () => interactionHandle.cancel();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="black" />
                <Text style={styles.loadingText}>Loading data...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <VirtualizedList
                style={{ flex: 1 }}
                data={data?.products.slice(0, show)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    const name = item.title;
                    const price = item.price;
                    const image = item.images[0];
                    console.log('rendering', index);
                    return (
                        <ProductCard
                            name={name} price={price} image={image}
                        />
                    );
                }}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={5}
                showsVerticalScrollIndicator={true}
            />

            <TouchableOpacity
                style={styles.showAllButton}
                activeOpacity={0.8}
                onPress={() => setShow((prev) => prev === 10 ? 20 : 10)}
            >
                <Text style={styles.showAllText}>{show === 10 ? 'Show 20' : 'Show 10'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    loadingText: {
        fontSize: 18,
        fontWeight: "600",
        color: "rgba(169, 169, 166, 0.55)",
    },
    showAllButton: {
        backgroundColor: "black",
        width: width * 0.9,
        paddingVertical: 12,
        borderRadius: 8,
        alignSelf: "center",
        marginVertical: 10,
    },
    showAllText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
});
