import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ActivityIndicator } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import colors from '../configs/colors';
export default function Loading({visible}) {
  return (
        <Modal transparent visible={visible}>
                   <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.4)"}}>
        <View style={{backgroundColor:colors.white,height:40,width:40,borderRadius:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={30} color={colors.green}/>
        </View>
               </View>
        </Modal>
  )
}

const styles=StyleSheet.create({
loadpar:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
})