import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

function LogoTitle() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Ionicons name="menu" size={24} color="black" />
      <View style={{ flexDirection: "row" }}>
        <Feather name="bell" size={24} color="black" />
        <Avatar.Image
          source={require("../../assets/imgavatar.png")}
          size={25}
          style={{marginLeft:24,marginRight:24}}
        />
      </View>
    </View>
  );
}

export default LogoTitle;
