import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import FIcon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Loading from "../Components/Loading"
import Enrollments from '../Components/Enrollments';
import { useSelector,useDispatch } from 'react-redux';
import { getProfile } from '../redux/profile/actions';
import { getEnrollmentdata } from '../redux/enrollments/action';
import { useIsFocused } from '@react-navigation/native';
import origin from '../configs/api';
import routenames from '../configs/routes';
import axios from "axios"
import * as Notifications from 'expo-notifications';
export default function Home({navigation}) {
    const focus=useIsFocused()
    const [isload,setisload]=React.useState(false)
    const dispatch=useDispatch()
    const userinfo=useSelector(state=>state?.authReducer)
    const {profile}=useSelector(state=>state?.profileReducer)
    const {data}=useSelector(state=>state?.enrollmentReducer)
    const token=userinfo?.currentUser?.token
    const fetchinfo=async()=>{
      setisload(true)
      await dispatch(getProfile({token}))
      await dispatch(getEnrollmentdata({token,id:profile?.id}))
      setisload(false)
    }
     // Function to request notification permission
const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    console.log('Failed to get push token for push notification!');
    return;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  await axios.put(`${origin}${routenames.resetUser}?token=${userinfo?.currentUser?.token}`, {
    devicetoken: token
  });

};
     React.useEffect(()=>{
      fetchinfo()
   },[profile?.id])
   React.useEffect(()=>{
    fetchinfo()
      registerForPushNotificationsAsync()
   },[])
   return (
    <View style={styles.mnonb}>
 <Loading visible={isload}/>
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(5)}}>
   <Text style={{fontSize:rp(5),fontFamily:fonts.Nextrabold}}>DIGI SCHOOL!</Text>
</View>
<View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:rp(2)}}>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nextrabold}}>Welcome!</Text>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nregular,marginLeft:5}}>{profile?.name}</Text>
</View>
<Enrollments enrollments={data} navigation={navigation}/>

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
    containerStyle:{
        
    },
    title:{
        color:colors.black,
        fontSize:rp(2.4)
        ,fontFamily:fonts.Nregular
    }

})