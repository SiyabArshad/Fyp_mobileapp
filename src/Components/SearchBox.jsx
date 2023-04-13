import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
function SearchBox({callinp}) {
    const [search,setsearch]=React.useState("")
  return (
    <View style={styles.search}>
      <TextInput value={search} onChangeText={(e)=>{
        setsearch(e)
        callinp(e)
    }} placeholderTextColor={colors.textgrey} style={styles.inp} placeholder='Search...'/>
    </View>
  )
}

const styles=StyleSheet.create({
search:{
    marginVertical:rp(2),
    borderWidth:1,
    borderColor:colors.black,
    borderRadius:rp(3)
},
inp:{
    paddingHorizontal:rp(2),
    paddingVertical:rp(1.4),
    fontFamily:fonts.Nmedium,
    color:colors.black
}
})

export default React.memo(SearchBox)