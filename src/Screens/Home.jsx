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
import api from '../configs/api';
import routenames from '../configs/routes';
export default function Home({navigation}) {
    const focus=useIsFocused()
    const [isload,setisload]=React.useState(false)
    const dispatch=useDispatch()
    const userinfo=useSelector(state=>state?.authReducer)
    const {profile}=useSelector(state=>state?.profileReducer)
    const enrs=useSelector(state=>state?.enrollmentReducer)
    const token=userinfo?.currentUser?.token
    const getenrollments=async()=>{
      setisload(true)
     await Promise.all([dispatch(getEnrollmentdata({token,id:profile?.id})),dispatch(getProfile({token}))])
      setisload(false)
    }
    React.useEffect(()=>{
      if(focus)
      {
        getenrollments()
      }
    },[focus])
    React.useEffect(()=>{
        getenrollments()
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
<Enrollments enrollments={enrs?.data} navigation={navigation}/>

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