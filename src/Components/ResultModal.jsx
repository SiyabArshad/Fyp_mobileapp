import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
export default function ResultModal({showmodal,visible}) {
  return (
    <Modal visible={visible}>
         <TouchableOpacity onPress={showmodal()} style={{backgroundColor:"red",marginLeft:20,marginTop:20,width:40,height:40,borderRadius:20,backgroundColor:colors.green,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <IonicIcon name='close' size={24} color={colors.white}/>
  </TouchableOpacity>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={{width:"90%",display:"flex",alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:colors.black,marginTop:rp(2)}}>
        <View style={{width:"90%",display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:rp(2)}}>
        <Avatar
          size={100}
          rounded
           source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:rp(2),paddingHorizontal:rp(2),borderTopWidth:1,borderBottomWidth:1,borderColor:colors.black}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Name</Text>
              <Text style={{color:colors.black,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>Ahmed PPik</Text>
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:rp(2),paddingVertical:rp(2),borderBottomWidth:1,borderColor:colors.black}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Class</Text>
              <Text style={{color:colors.black,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>9th</Text>
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:rp(2),paddingVertical:rp(2),borderBottomWidth:1,borderColor:colors.black}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Date</Text>
              <Text style={{color:colors.black,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>11-April-2023</Text>
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:rp(2),paddingVertical:rp(2)}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Grade</Text>
              <Text style={{color:colors.red,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>A</Text>
        </View>
  </View>
 
        </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    mnonb:{
        flex:1,
        backgroundColor:colors.white,
      paddingHorizontal:rp(3)
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
    containerStyle:{
        
    },
    title:{
        color:colors.black,
        fontSize:rp(2.4)
        ,fontFamily:fonts.Nregular
    }

})