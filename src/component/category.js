import * as React from 'react';
import { Text, View, TextInput, ScrollView,Dimensions} from "react-native";
import { Avatar } from "react-native-paper";

const Category = (props) =>{
    return(
        <View style={{ height: 90, width: 100, marginLeft: 20,justifyContent:"center",alignContent:"center"}}>
        <View style={{ flex: 2,backgroundColor:"rgba(255, 118, 117,.1)",justifyContent:"center",borderRadius:10}}>
        <Avatar.Image
          source={require("../../assets/tablet.png")}
          size={50}
          style={{alignSelf:"center"}}
        />
        
        </View>
        <View >
        <Text style={{ alignSelf:"center"}}>{props.name}</Text>
        </View>
    </View>
    )
}

export default Category;