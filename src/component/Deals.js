import * as React from "react";
import { Text, View, TextInput, ScrollView, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

const Deals = (props) => {
  return (
    <View style={{ height: 130, width: 250, marginLeft: 20 }}>
      <LinearGradient
      colors={['rgba(255, 118, 117,.1)', "rgba(255, 118, 117,.2)",'#ff7675']}
        style={{
          flex: 2,
          
        //   backgroundColor: "#fab1a0",
          justifyContent: "center",
          position: "relative",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            alignSelf: "flex-end",
            position: "absolute",
            top: 0,
            color: "white",
            backgroundColor: "red",
            marginRight: 1,
            borderTopRightRadius: 10,
            paddingBottom:4,
            lineHeight:21
          }}
        >
          45% OFF
        </Text>
        <View style={{marginLeft:10}}>
        <Avatar.Image
          source={require("../../assets/vitami9n.jpg")}
          size={50}
        />
        <Text style={{ alignSelf: "flex-start",marginTop:10 }}>{props.name}</Text>
        <View style={{ flexDirection: "row",marginTop:12 }}>
          <Text style={{ alignSelf: "center", color: "#d63031" }}>
            {props.price}
          </Text>
          <Text style={{ alignSelf: "center", color: "black",textDecorationLine: 'line-through',marginLeft:12 }}>
            {props.cutprice}
          </Text>
        </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Deals;
