import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
export default function Enrolleduser() {
  return (
    <View style={{marginHorizontal:rp(2)}}>
      <ImageBackground borderRadius={20} style={{height:80,width:70,display:"flex",overflow:"hidden"}} source={require("../../assets/images/user2.jpg")}>
        <TouchableOpacity style={{backgroundColor:colors.green,width:30,height:30,borderRadius:15,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <IonicIcon name='add' size={24} color={colors.white}/>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={{marginTop:5,fontSize:rp(2),fontFamily:fonts.Nregular,textAlign:"center"}}>Sunny</Text>
    </View>
  )
}