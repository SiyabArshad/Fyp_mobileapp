import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../Components/MessageCard';
import { ref,getDownloadURL,getStorage, uploadBytes  } from "firebase/storage"
import app from '../configs/firebase';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';
import axios from 'axios';
import origin from '../configs/api';
import routenames from "../configs/routes.js"
export default function UpdateProfile({navigation}) {
    const userinfo=useSelector(state=>state?.authReducer)
    const {profile}=useSelector(state=>state?.profileReducer)
    const storage = getStorage(app);
    const[name,setname]=React.useState(profile?.name?profile.name:"")
    const [isload,setisload]=React.useState(false)
    const [issubmit,setissubmit]=React.useState(false)
    const [Error,setError]=React.useState('')
    const [type,settype]=React.useState(false)
    const [image, setImage] = React.useState(profile?.profile?profile?.profile:'');
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        if (!result.canceled) {
          const imageUri = result.assets[0].uri;
          setImage(imageUri);
        }
      };
    
    // const handleform=async()=>{
    //     setisload(true)
    //     try{
    //        if(image!==''||image!==null)
    //        {
    //         const storageRef = ref(storage,'fypapp/' +profile?.name+ "profile +image1"+new Date().toLocaleString());
    //         const img = await fetch(image);
    //         const bytes = await img.blob();
    //     uploadBytes(storageRef, bytes)
    //     .then(snapshot => {
    //         return getDownloadURL(snapshot.ref)
    //     })
    //     .then(async(downloadURL) => {
    //         await axios.put(`${origin}${routenames.updateprofile}?token=${userinfo?.currentUser?.token}`,{
    //             profile:downloadURL,
    //             name:name

    //         })
    //           setError("Updated Successfully")
    //           settype(true)
          
    //         }).catch((e)=>{
    //         setError("Updated Failed")
    //         settype(false)
        
    //     })
    //        }
    //        else
    //        {
    //         try{
    //             await axios.put(`${origin}${routenames.updateprofile}?token=${userinfo?.currentUser?.token}`,{
    //                 name:name
    //             })
    //               setError("Updated Successfully")
    //               settype(true)
    //         }
    //         catch(e){
    //             console.log("in",e)
    //             setError("Try again later")
       
    //             settype(false)
    //         }
    //        }
    // }

    //     catch(e){
    //         console.log("out",e)
    //         setError("Try again later")
   
    //         settype(false)
    //     }
    //     finally{
    //         setissubmit(true)
    //         setisload(false)
    //     }
    // }
    // const handleform = async () => {
    //     setisload(true);
    //     try {
    //       let downloadURL = image;
          
    //       if (image !== '' || image !== null) {
    //         const storageRef = ref(storage, `fypapp/${profile?.name}profile+image1${new Date().toLocaleString()}`);
    //         const img = await fetch(image);
    //         const bytes = await img.blob();
    //         const snapshot = await uploadBytes(storageRef, bytes);
    //         downloadURL = await getDownloadURL(snapshot.ref);
    //         await axios.put(`${origin}${routenames.updateprofile}?token=${userinfo?.currentUser?.token}`, {
    //           profile: downloadURL,
    //           name: name
    //         });
    //         setError("Updated Successfully");
    //         settype(true);
          
    //       }
    //       else
    //       {
    //       await axios.put(`${origin}${routenames.updateprofile}?token=${userinfo?.currentUser?.token}`, {
    //         name: name
    //       });
    //       setError("Updated Successfully");
    //       settype(true);
    //     }
    //     } catch (e) {
    //       console.log("Error:", e);
    //       setError("Try again later");
    //       settype(false);
    //     } finally {
    //       setissubmit(true);
    //       setisload(false);
    //     }

    
    //   };

    const handleform = async () => {
      setisload(true);
      try {
        // let downloadURL = image;
    
        if (image && image !== '') {
          const storageRef = ref(
            storage,
            `fypapp/${profile?.name}profile+image1${new Date().toLocaleString()}`
          );
          const img = await fetch(image);
          const bytes = await img.blob();
          const snapshot = await uploadBytes(storageRef, bytes);
          const downloadURL = await getDownloadURL(snapshot.ref);
          await axios.put(`${origin}${routenames.updateprofile}?token=${userinfo?.currentUser?.token}`, {
            profile: downloadURL,
            name: name
          });
        } else {
          await axios.put(`${origin}${routenames.updateprofile}?token=${userinfo?.currentUser?.token}`, {
            name: name
          });
        }
    
        setError("Updated Successfully");
        settype(true);
      } catch (e) {
        console.log("Error:", e);
        setError("Try again later");
        settype(false);
      } finally {
        setissubmit(true);
        setisload(false);
      }
    };
    
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
        <Pressable onPress={pickImage} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:colors.black,paddingHorizontal:rp(2),paddingVertical:rp(1),width:150,height:150,borderRadius:75}}>
            <Image resizeMode='cover' style={{width:150,height:150,borderRadius:75}} source={image?{uri:image}:require("../../assets/images/user2.jpg")}/>
        </Pressable>
    </View>
    <View style={{marginVertical:rp(3)}}>
        <Text style={{fontSize:rp(3),color:colors.black,fontFamily:fonts.Nextrabold}}>Profile info</Text>
        <View style={{marginTop:rp(8),marginHorizontal:rp(2)}}>
     
     <View style={{marginBottom:rp(7)}}>
        <Text style={styles.lable}>Username</Text>
        <TextInput value={name} onChangeText={(e)=>setname(e)} style={{marginTop:rp(1),borderBottomWidth:1,borderBottomColor:colors.black,paddingHorizontal:rp(1.2),paddingVertical:rp(.6),color:colors.black,fontFamily:fonts.Rregular}}/>
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