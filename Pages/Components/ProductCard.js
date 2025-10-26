// ProductCard.js
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const width = Dimensions.get("window").width;

export const ProductCard = React.memo(({ name, price, image }) => {
  
  return (
    <View
      style={{
        width: width * 0.9,
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#a0a0a0",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 10,
        gap: 10,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 80,
          width: 80,
          borderRadius: 8,
          resizeMode: "cover",
        }}
      />
      <View>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "black" }}>
          {name.length > 20 ? `${name.slice(0, 20)}...` : name}
        </Text>
        <Text
          style={{ fontSize: 16, fontWeight: "600", color: "gray" }}
        >{`$${price}`}</Text>
      </View>
    </View>
  );
});
