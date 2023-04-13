import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../Components/MessageCard';

export default function Aboutus({navigation}) {
  return (
    <View style={styles.mnonb}>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(5)}}>
        <Pressable onPress={
            ()=>navigation.pop()
        } style={styles.btn}>
        <IonicIcon name="arrow-back" size={24} color={colors.white} />
        </Pressable>
        <Text style={{fontSize:rp(2.8),fontFamily:fonts.Nbold}}>About us</Text>
        <Text></Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>    
    <View style={{marginVertical:rp(3)}}>
        <Text style={{fontSize:rp(3),color:colors.black,fontFamily:fonts.Nextrabold}}>Information</Text>
        <Text style={{marginTop:rp(2),fontFamily:fonts.Nregular,textAlign:"justify",fontSize:rp(2.1)}}>
            {
                "Connect with local golfers, increase your skills, and enjoy your experience with the JustGolf community!"
            }
            

        </Text>
    </View>
    </ScrollView>
    </View>
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
})