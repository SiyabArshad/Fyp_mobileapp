import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../Components/MessageCard';
import routenames from '../configs/routes';
import { useSelector,useDispatch } from 'react-redux';
import { loginaction,logoutaction } from '../redux/auth/authaction';
import Loading from "../Components/Loading"
import axios from 'axios';

import origin from "../configs/api"
export default function Forgotpass({navigation}) {
    const [email,setemail]=React.useState("")
    const [isload,setisload]=React.useState(false)
    const [issubmit,setissubmit]=React.useState(false)
    const [Error,setError]=React.useState('')
    const [type,settype]=React.useState(false)
    const handleform=async()=>{
        setisload(true)
        try{
            if(email.length===0)
            {
            setError("Some Feilds are Missing")
            settype(false)
            }
            else if(email.length>10)
            {
                const {data}=await axios.post(`${origin}${routenames.passlink}`,{email})
                    settype(true) 
                    setError(data?.message)          
            }
            else
            {
                settype(false)
                setError("Invalid Credentials")
            }
        }
        catch(e){
            console.log(e)
            settype(false)
            setError("Try again later")   
        }
        finally{
            setissubmit(true)
            setisload(false)
        }
    }
    const callbacksubmit=()=>{
        setissubmit(false)
    }
  return (
    <ScrollView style={styles.mnonb} showsVerticalScrollIndicator={false}>
        <Loading visible={isload}></Loading>
     <MessageCard type={type} message={Error} show={issubmit} callshow={callbacksubmit}/>
     <View style={{display:"flex",flexDirection:"row",marginTop:rp(5),marginHorizontal:rp(2)}}>
        
     <Pressable onPress={()=>navigation.pop()} style={styles.btn}>
     <IonicIcon name="arrow-back" size={24} color={colors.white} />
     </Pressable>
     </View>
     <View style={{marginVertical:rp(5),marginHorizontal:rp(2)}}>
     <Text style={styles.text1}>
      Reset Password!
     </Text>
     <Text style={styles.text2}>Enter Your Registered Email so we can send Password reset Link</Text>
     </View>
     <View style={{marginTop:rp(8),marginHorizontal:rp(2)}}>
     <View style={{marginBottom:rp(7)}}>
        <Text style={styles.lable}>Email</Text>
        <TextInput 
        value={email} onChangeText={(e)=>setemail(e)}
        style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.Rregular}}/>
     </View>
     </View>
     <View style={[{marginBottom:rp(5),zIndex:999},styles.centertext]}>
                <Pressable 
                disabled={issubmit} 
                onPress={handleform} style={{backgroundColor:colors.black,paddingHorizontal:rp(8),paddingVertical:rp(1),borderRadius:rp(3)}}>
                    {
                        isload?
                        <ActivityIndicator size={30} color={colors.white}/>
                        :
                        <Text style={{color:colors.white,fontFamily:fonts.Nbold,fontSize:rp(3),textTransform:"uppercase"}}>Send</Text>
                    }
                </Pressable>
     </View> 
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    mnonb:{
        flex:1,
        backgroundColor:colors.white
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
    text1:{
        color:colors.black,
        fontFamily:fonts.Nextrabold,
        fontSize:rp(5)
    },
    text2:{
        color:colors.textgrey,
        fontFamily:fonts.Nmedium,
        fontSize:rp(2.5)
    },
    lable:{
        fontFamily:fonts.Nregular,
        fontSize:rp(3.5),
        color:colors.textgrey
    }
})