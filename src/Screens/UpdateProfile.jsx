import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../Components/MessageCard';

export default function UpdateProfile({navigation}) {
    const[email,setemail]=React.useState("")
    const[name,setname]=React.useState("")
    const[desc,setdesc]=React.useState("")
    const [isload,setisload]=React.useState(false)
    const [issubmit,setissubmit]=React.useState(false)
    const [Error,setError]=React.useState('')
    const [type,settype]=React.useState(false)
    const handleform=async()=>{
        setisload(true)
        setissubmit(true)
        try{
            if(email.length===0&&name.length===0)
            {
            setError("Some Feilds are Missing")
            setisload(false)
            settype(false)
            }
            if(email.length>10&&name.length>5){

                setError("Updated Successfully")
                setisload(false)
                settype(true)
            }
            else
            {
                setError("Invalid Credentials")
                setisload(false)
                settype(false)
           
            }
        }
        catch{
            setError("Try again later")
            setisload(false)
            settype(false)
           
        }
    }
    const callbacksubmit=()=>{
        setissubmit(false)
    }

  return (
    <View style={styles.mnonb}>
         <MessageCard type={type} message={Error} show={issubmit} callshow={callbacksubmit}/>
    
     <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(5)}}>
        <Pressable onPress={()=>navigation.pop()} style={styles.btn}>
        <IonicIcon name="arrow-back" size={24} color={colors.white} />
        </Pressable>
        <Text style={{fontSize:rp(2.8),fontFamily:fonts.Nbold}}>Edit Profile</Text>
        <Text></Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>    
    <View style={{height:200,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Pressable style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(1),width:150,height:150,borderRadius:75}}>
            <Image resizeMode='cover' style={{width:150,height:150,borderRadius:75}} source={require("../../assets/images/user2.jpg")}/>
        </Pressable>
    </View>
    <View style={{marginVertical:rp(3)}}>
        <Text style={{fontSize:rp(3),color:colors.black,fontFamily:fonts.Nextrabold}}>Profile info</Text>
        <View style={{marginTop:rp(8),marginHorizontal:rp(2)}}>
     <View style={{marginBottom:rp(7)}}>
        <Text style={styles.lable}>Email</Text>
        <TextInput 
        value={email} onChangeText={(e)=>setemail(e)}
        style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.Rregular}}/>
     </View>
     <View style={{marginBottom:rp(7)}}>
        <Text style={styles.lable}>Username</Text>
        <TextInput value={name} onChangeText={(e)=>setname(e)} style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.Rregular}}/>
     </View>
     <View style={{marginBottom:rp(7)}}>
        <Text style={styles.lable}>Description</Text>
        <TextInput value={desc} onChangeText={(e)=>setdesc(e)} style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.Rregular}}/>
     </View>
     </View>
    </View>
    <Pressable disabled={issubmit} onPress={handleform} style={[{backgroundColor:colors.black,marginBottom:rp(8),paddingHorizontal:rp(2),paddingVertical:rp(2),borderRadius:rp(3)},styles.centertext]}>
        {
            isload?
            <ActivityIndicator size={30} color={colors.white}/>
            :
            <Text style={{color:colors.white,fontFamily:fonts.Nbold,fontSize:rp(2),textTransform:"uppercase"}}>Update</Text>
        
        }
    </Pressable>
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