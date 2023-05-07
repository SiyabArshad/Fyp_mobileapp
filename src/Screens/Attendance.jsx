import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList,SafeAreaView } from 'react-native'
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
export default function Attendance({navigation,route}) {
    const className=route?.params?.classname
    const [isload,setisload]=React.useState(false)
    const [attendance,setattendance]=React.useState(null)
    const [selecteddate,setselecteddate]=React.useState(null)
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
      const tempdate=new Date(date).toDateString()
      hideDatePicker();
      setselecteddate(tempdate)
  
    };
    React.useEffect(()=>{
      setisload(true)
      setTimeout(() => {
        setisload(false)
      }, 3000);
    },[])
  return (

    <SafeAreaView style={{flex:1}}>
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
      <Text style={{fontSize:rp(3),fontFamily:fonts.Nblack,color:colors.black}}>{className&&className} Class</Text>     
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
   <Text style={{fontSize:rp(2),fontFamily:fonts.Nextrabold,color:colors.green}}>Check Your Attendance</Text>
   <TouchableOpacity onPress={showDatePicker}>
    <FIcon name='calendar' size={32} color={colors.green}/>
   </TouchableOpacity>
</View>
</View>
<ScrollView showsVerticalScrollIndicator={false}>
      {
        selecteddate&&<View style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:colors.black,marginTop:rp(2)}}>
        <View style={{width:"90%",display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:rp(2)}}>
        <Avatar
          size={100}
          rounded
           source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:rp(2),paddingHorizontal:rp(2),borderTopWidth:1,borderBottomWidth:1,borderColor:colors.black}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Name</Text>
              <Text style={{color:colors.black,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>Ahmed PPik</Text>
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:rp(2),paddingVertical:rp(2),borderBottomWidth:1,borderColor:colors.black}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Class</Text>
              <Text style={{color:colors.black,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>9th</Text>
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:rp(2),paddingVertical:rp(2),borderBottomWidth:1,borderColor:colors.black}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Date</Text>
              <Text style={{color:colors.black,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>11-April-2023</Text>
        </View>
        <View style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:rp(2),paddingVertical:rp(2)}}>
              <Text style={{color:colors.black,fontSize:rp(2.4),fontFamily:fonts.Nbold}}>Status</Text>
              <Text style={{color:colors.red,fontFamily:fonts.Nregular,fontSize:rp(2.2)}}>Absent</Text>
        </View>
  </View>
      }
      <AttendanceChart/>
</ScrollView>
</View>
    </SafeAreaView>
  )
}