import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Re from "react-native-elements"
import MessageCard from '../Components/MessageCard';

export default function Profile({navigation}) {
  const [isdark,setisdark]=React.useState(false)
  return (
    <View style={styles.mnonb}>
      <View style={[styles.centertext,{marginTop:rp(4)}]}>
        <Image style={{height:80,width:80,borderRadius:40}} resizeMode='cover' source={require("../../assets/images/user2.jpg")}/>
          <Text style={{color:colors.black,fontFamily:fonts.Nextrabold,fontSize:rp(3),marginTop:rp(1)}}>Ahmed Ppik</Text>
          <Text style={{color:colors.black,fontFamily:fonts.Nregular}}>ahmedppik99@gmail.com</Text>
      </View>
      <View style={{marginTop:rp(2)}}>
            <Pressable onPress={()=>navigation.navigate("edit")} style={{backgroundColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(1.3),borderRadius:rp(1),marginBottom:rp(1),display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FIcon name="edit" size={20} color={colors.white} />
              <Text style={{color:colors.white,fontSize:rp(2.3),fontFamily:fonts.Nmedium,marginLeft:rp(2)}}>Edit Profile</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate("login")} style={{backgroundColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(1.3),borderRadius:rp(1),marginBottom:rp(1),display:"flex",flexDirection:"row",alignItems:"center"}}>
            <MaterialIcon name="logout" size={20} color={colors.white} />
              <Text style={{color:colors.white,fontSize:rp(2.3),fontFamily:fonts.Nmedium,marginLeft:rp(2)}}>Logout</Text>
            </Pressable>
         </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mnonb:{
        flex:1,
        backgroundColor:colors.white,
        paddingHorizontal:rp(3),
        paddingVertical:rp(5)
    },
    centertext:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    btn:{
        backgroundColor:colors.black,
        paddingHorizontal:5,
        paddingVertical:4,
        borderRadius:5
    },
})