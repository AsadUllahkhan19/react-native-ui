import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingScreen";
import Bag from "./src/screens/bag";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "location") {
              iconName = focused ? "location-outline" : "location-outline";
            } else if (route.name == "settings") {
              iconName = focused ? "settings" : "settings";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          style: {
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            elevation: 0,
            backgroundColor: "#ffffff",
            position: "absolute",
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="location" component={SettingsScreen} />
        <Tab.Screen name="settings" component={Bag} />
        {/* <Tab.Screen name="location" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
