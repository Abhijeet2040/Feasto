import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
	House,
	ShoppingCart,
	BookText,
	CircleUserRound,
} from "lucide-react-native";
function test({ color }) {
	console.log(color);
}
const Tablayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#FF0000",
				tabBarInactiveTintColor: "gray",
			}}
		>
			<Tabs.Screen
				name="Home"
				options={{
					headerShown: false,
					title: "Home",
					tabBarLabelStyle: {
						marginTop: -10,
						fontSize: 14,
						justifyContent: "center",
						alignContent: "center",
					},
					tabBarIcon: ({ focused }) => (
						<House color={focused ? "#ff0000" : "gray"} />
					),
				}}
			/>
			<Tabs.Screen
				name="Cart"
				options={{
					headerShown: false,
					title: "Cart",
					tabBarLabelStyle: {
						marginTop: -10,
						fontSize: 14,
						justifyContent: "center",
						alignContent: "center",
					},
					tabBarIcon: ({ focused }) => (
						<ShoppingCart color={focused ? "#ff0000" : "gray"} />
					),
				}}
			/>
			<Tabs.Screen
				name="Order"
				options={{
					headerShown: false,
					title: "Order",
					tabBarLabelStyle: {
						marginTop: -10,
						fontSize: 14,
						justifyContent: "center",
						alignContent: "center",
					},
					tabBarIcon: ({ focused }) => (
						<BookText color={focused ? "#ff0000" : "gray"} />
					),
				}}
			/>
			<Tabs.Screen
				name="Account"
				options={{
					headerShown: false,
					title: "Account",
					tabBarLabelStyle: {
						marginTop: -10,
						fontSize: 14,
						justifyContent: "center",
						alignContent: "center",
					},
					tabBarIcon: ({ focused }) => (
						<CircleUserRound color={focused ? "#ff0000" : "gray"} />
					),
				}}
			/>
		</Tabs>
	);
};

export default Tablayout;
