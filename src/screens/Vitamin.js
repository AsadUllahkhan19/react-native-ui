import * as React from 'react';
import { Text, View, TextInput, ScrollView,Dimensions} from "react-native";
import { Avatar } from "react-native-paper";

const Vitamin = (props) =>{
    return(
        <View style={{ height: 110, width: 130, marginLeft: 20,justifyContent:"center",alignContent:"center"}}>
        <View style={{ flex: 2,backgroundColor:"rgba(255, 118, 117,.1)",justifyContent:"center",borderRadius:10}}>
        <Avatar.Image
          source={require("../../assets/vitamin.jpg")}
          size={50}
          style={{alignSelf:"center"}}
        />
        <Text style={{ alignSelf:"center"}}>{props.name}</Text>
        <Text style={{ alignSelf:"center",color:"white",backgroundColor:"red",padding:3,fontSize:11}}>{props.cutprice}</Text>
        </View>
    </View>
    )
}

export default Vitamin;