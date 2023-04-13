import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function Loading({visible}) {
  return (
        <Modal transparent visible={visible}>
                   <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.4)"}}>
                <LottieView
      source={require('../../assets/animations/Loading.json')}
      autoPlay
      loop
    />
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