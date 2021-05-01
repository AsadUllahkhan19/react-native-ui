import * as React from "react";
import { Text, View, TextInput, ScrollView, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LogoTitle from "../component/LogoStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import Category from "../component/category";
import Deals from "../component/Deals";
import Vitamin from "../screens/Vitamin"
import Image1 from "../../assets/imgavatar.png";

const Stack = createStackNavigator();
const { height, width } = Dimensions.get("window");

function Home() {
  return (
    <View style={{ flex: 1, alignItems: "flex-start" }}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "white",
          marginHorizontal: 20,
          marginTop: 24,
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "black",
          shadowOpacity: 0.2,
          elevation: 1,
        }}
      >
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search"
          placeholderTextColor="grey"
          style={{
            flex: 1,
            fontWeight: "700",
            backgroundColor: "white",
            marginRight: -20,
          }}
        />
        <Ionicons name="setting" size={24} color="black" />
      </View>

      <View
        style={{
          width: width - 40,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginHorizontal: 20,
          marginTop: 14,
        }}
      >
        <Text style={{ fontWeight: "700" }}>Shop By Category</Text>
        <Text style={{ fontWeight: "700" }}>See All</Text>
      </View>
      <ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 90 }}
        >
          <Category name="Diabetes" />
          <Category name="Supplements" />
          <Category name="Vitamin" />
          <Category name="Ayuveda" />
          <Category name="Tablets" />
        </ScrollView>
        <View
          style={{
            width: width - 40,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            marginHorizontal: 20,
            marginTop: 15,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Deals & Offers</Text>
          <Text style={{ fontWeight: "700" }}>See All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 190 }}
        >
          <Deals name="Vitamin" price="$56.00" cutprice="90.00" />
          <Deals name="Ayuveda" price="$89.00" cutprice="90.00" />
        </ScrollView>
        <View
        style={{
          width: width - 40,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginHorizontal: 20,
          marginTop: 14,
        }}
      >
        <Text style={{ fontWeight: "700" }}>Vitamin Supplement</Text>
        <Text style={{ fontWeight: "700" }}>See All</Text>
      </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 190 }}
        >
          <Vitamin name="Vitamin" cutprice="6.5" />
          <Vitamin name="Ayuveda" cutprice="6.8" />
          <Vitamin name="Vitamin" cutprice="6.8" />
          <Vitamin name="Ayuveda" cutprice="6.8" />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function HomeScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
