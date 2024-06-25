import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search } from "lucide-react-native";
import SpotLightCard from "../../components/SpotLightCard";

const restaurants = [
  { id: 1, name: "The Sizzling Steakhouse" },
  { id: 2, name: "Cozy Italian Bistro" },
  { id: 3, name: "Happy Dragon Palace" },
  { id: 4, name: "Fresh & Green Salads" },
  { id: 5, name: "Heavenly Desserts" },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text
            style={{
              color: "#ff0000",
              fontSize: 17,
              fontWeight: 900,
              letterSpacing: 3,
            }}
          >
            DELIVER TO
          </Text>
          <Text
            style={{
              letterSpacing: 1,
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            Sundarpada, Ebaranga
          </Text>
        </View>
        <Pressable style={{ position: "relative" }}>
          <Text style={styles.input} keyboardType="default">
            Search for 'Cake'
          </Text>
          <Search
            color="#000000"
            style={{
              position: "absolute",
              top: 35,
              right: 14,
            }}
          />
        </Pressable>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <SpotLightCard hotelName={item.name} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    backgroundColor: "#ffff",
  },
  input: {
    textAlignVertical: "center",
    height: 60,
    marginVertical: 18,
    paddingHorizontal: 14,
    backgroundColor: "#ecf5f5",
    borderRadius: 10,
    fontSize: 20,
    letterSpacing: 1,
  },
});
export default Home;
