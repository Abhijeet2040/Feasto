import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import biryani from "../assets/biryani.jpg";
const SpotLightCard = ({ image, hotelName, duration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={biryani} contentFit="cover" />
        <Text
          style={{
            position: "absolute",
            bottom: 20,
            left: 8,
            color: "#fff",
            fontSize: 22,
            fontWeight: 900,
          }}
        >
          50% OFF
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16.9,
          letterSpacing: 0.9,
          fontWeight: 680,
        }}
      >
        {hotelName}
      </Text>
      <Text
        style={{
          color: "#8D8C91",
          fontWeight: 500,
        }}
      >
        40-45 min
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginRight:15,
    position: "relative",
    width: 100,
    height: 180,
    borderRadius: 16,
  },
  image_container: {
    position: "relative",
  },
  image: {
    width: 93,
    height: 124,
    borderRadius: 16,
  },
});

export default SpotLightCard;
