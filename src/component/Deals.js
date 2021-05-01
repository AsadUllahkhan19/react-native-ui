import * as React from 'react';
import { Text, View, TextInput, ScrollView,Dimensions} from "react-native";
import { Avatar } from "react-native-paper";

const Deals = (props) =>{
    return(
        <View style={{ height: 190, width: 250, marginLeft: 20}}>
        <View style={{ flex: 2,backgroundColor:"#fab1a0",justifyContent:"center", }}>
        <Avatar.Image
          source={require("../../assets/imgavatar.png")}
          size={50}
        />
        <Text style={{ alignSelf:"center"}}>{props.name}</Text>
        <View style={{flexDirection:"row",
           alignSelf:"flex-start"
    }}>
        <Text style={{ alignSelf:"center",color:"#d63031"}}>{props.price}</Text>
        <Text style={{ alignSelf:"center",color:"#d63031"}}>{props.price}</Text>
        </View>
        
        </View>
    </View>
    )
}

export default Deals;