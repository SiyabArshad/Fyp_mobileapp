import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf, RFPercentage } from "react-native-responsive-fontsize";
import Entypo from 'react-native-vector-icons/Entypo';
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

export default function Menu({navigation,route}) {
    const classinfo=route?.params?.class
  return (
    <View style={styles.mnonb}>
      <View style={{marginTop:RFPercentage(5),display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>navigation.pop()} style={{display:"flex",justifyContent:"center",alignItems:"center",margin:RFPercentage(2)}}>
        <Entypo name="chevron-left" size={24} color={colors.green}/>
        </TouchableOpacity>
        <Text style={{fontSize:rp(2),fontFamily:fonts.Nregular,color:colors.black}}>{classinfo&&classinfo?.class?.classname} Class</Text>
      </View>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity  onPress={()=>navigation.navigate("attendance",{class:classinfo})} style={{backgroundColor:colors.green,paddingHorizontal:RFPercentage(2),paddingVertical:RFPercentage(1),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:RFPercentage(1),width:200,marginBottom:RFPercentage(1)}}>
            <Text style={{color:colors.white,fontSize:RFPercentage(2.6),fontFamily:fonts.Nblack}}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("result",{class:classinfo})} style={{backgroundColor:colors.green,paddingHorizontal:RFPercentage(2),paddingVertical:RFPercentage(1),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:RFPercentage(1),width:200,marginBottom:RFPercentage(1)}}>
            <Text style={{color:colors.white,fontSize:RFPercentage(2.6),fontFamily:fonts.Nblack}}>Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mnonb:{
        flex:1,
        backgroundColor:colors.white,
      paddingHorizontal:rp(3),
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