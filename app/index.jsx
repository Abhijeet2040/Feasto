import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Index</Text>
        <Link href="/Home">go to home</Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;
