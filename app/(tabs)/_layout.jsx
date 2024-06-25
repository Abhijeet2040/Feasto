import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { House, ShoppingCart } from "lucide-react-native";
const Tabicon = ({ icon, title, focused }) => {
  return (
    <View className="flex justify-center items-center">
      {icon}
      {focused && (
        <Text style={{ color: focused ? "blue" : "grey" }}>{title}</Text>
      )}
    </View>
  );
};
const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
      
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Tabicon
              icon={<House color={focused ? "blue" : "grey"} />}
              title="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          title: "Cart",
          tabBarIcon: () => <ShoppingCart />,
        }}
      />
      <Tabs.Screen
        name="Order"
        options={{
          headerShown: false,
          title: "Order",
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          headerShown: false,
          title: "Account",
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
