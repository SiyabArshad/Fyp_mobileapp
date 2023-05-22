import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList,SafeAreaView,Alert } from 'react-native'
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
import AttendanceChart from '../Components/AttendanceChart';
import { useSelector,useDispatch } from 'react-redux';
import { getProfile } from '../redux/profile/actions';
import { useIsFocused } from '@react-navigation/native';
import origin from '../configs/api';
import routenames from '../configs/routes';
import axios from 'axios';
import { changeFormat } from '../configs/formatedate';
import AttendanceModal from '../Components/AttendanceModal';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Attendance({navigation,route}) {
    const classinfo=route?.params?.class
    const [isload,setisload]=React.useState(false)
    const [attendance,setattendance]=React.useState(null)
    const [selecteddate,setselecteddate]=React.useState(null)
    const [attendancebydate,setattendancebydate]=React.useState([])
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const userinfo=useSelector(state=>state?.authReducer)
    const token=userinfo?.currentUser?.token
    const focus=useIsFocused()
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
      const temp=date.formattedDate = date.toISOString().split('T')[0];
      hideDatePicker();
      setselecteddate(temp)
      filterattendancewithdate(temp)
  
    };
    const getattendanceall=async()=>{
      setisload(true)
      try{
        const {data} =await axios.get(`${origin}${routenames.allattendance}?token=${token}&enrollmentId=${classinfo?.id}`) 
        setattendance(data?.data)
       }
      catch(e){
        console.log(e)
      }
      finally{
        setisload(false)
      }
      
    }
    React.useEffect(()=>{
      if(focus)
      {
        getattendanceall()
      }
    },[focus])
    const closemodal=()=>{
      setselecteddate(null)
    }
    const filterattendancewithdate=(dat)=>{
        let att=[]
        att=attendance?.attendance.filter((item)=>item?.date===dat)
        if(att)
        {
          setattendancebydate(att)
        }
        if(att.length===0)
        {
          Alert.alert("No Record Exist")
        }
    }
  return (

    <SafeAreaView style={{flex:1}}>
      <AttendanceModal att={attendancebydate} visibility={selecteddate===null||attendancebydate.length===0?false:true} closemodal={closemodal}/>
        <View style={{flex:1,paddingHorizontal:rp(3),marginBottom:rp(3)}}>
        <Loading visible={isload}/>
       <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        customHeaderStyle={{ backgroundColor: colors.green }}
      />
      <View style={{marginBottom:rp(1),marginTop:Platform.OS==='android'?rp(6):rp(1)}}>
     
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>navigation.pop()} style={{display:"flex",justifyContent:"center",alignItems:"center",margin:rp(2)}}>
        <Entypo name="chevron-left" size={24} color={colors.green}/>
        </TouchableOpacity>
   <Text style={{fontSize:rp(2),fontFamily:fonts.Nextrabold,color:colors.green}}>Check Your Attendance</Text>
        </View>
   <TouchableOpacity onPress={showDatePicker}>
    <FIcon name='calendar' size={32} color={colors.green}/>
   </TouchableOpacity>
</View>
</View>
<ScrollView showsVerticalScrollIndicator={false}>
      <AttendanceChart data={attendance}/>
</ScrollView>
</View>
    </SafeAreaView>
  )
}