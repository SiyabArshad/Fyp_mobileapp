import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import * as React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Loading from "../Components/Loading"
import ResultModal from '../Components/ResultModal';
import { useSelector,useDispatch } from 'react-redux';
import { getProfile } from '../redux/profile/actions';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import origin from '../configs/api';
import routenames from '../configs/routes';

export default function Results({navigation,route}) {
    const focus=useIsFocused()
    const classinfo=route?.params?.class
    const [isload,setisload]=React.useState(false)
    const dispatch=useDispatch()
    const userinfo=useSelector(state=>state?.authReducer)
    const token=userinfo?.currentUser?.token
    const [resultshown,setresultshown]=React.useState(false)
    const [results,setresults]=React.useState([])
    const [selectedresult,setselectedresult]=React.useState(null)

    const getResults=async()=>{
      setisload(true)
      try{
        const{data}=await axios.get(`${origin}${routenames.getallresults}?token=${token}&enrollmentId=${classinfo?.id}`)
        setresults(data?.data?.results)
      }
      catch(e){
          console.log(e)
      }
      finally{
        setisload(false)
      }
    }
    const closemodal=(state)=>{
    setresultshown(state)
  }
  React.useEffect(()=>{
    getResults()
  },[focus])  
  return (
    <View style={styles.mnonb}>
      <Loading visible={isload}/>
      {resultshown?<ResultModal data={selectedresult} closemodal={closemodal}/>:null}
      <View style={{marginTop:rp(5),display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>navigation.pop()} style={{display:"flex",justifyContent:"center",alignItems:"center",margin:rp(2)}}>
        <Entypo name="chevron-left" size={24} color={colors.green}/>
        </TouchableOpacity>
      </View>
<View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:rp(2)}}>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nextrabold}}>Result!</Text>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nregular,marginLeft:5}}>here</Text>
</View>
<ScrollView showsVerticalScrollIndicator={false}>
{
    results&&results.map((item,i)=>(
        <View key={i} style={{borderWidth:1,borderColor:colors.green,marginBottom:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.7),borderRadius:rp(1),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{color:colors.black,fontFamily:fonts.Nregular}}>{item?.subject} Result</Text>
            <TouchableOpacity onPress={()=>{
              setresultshown(true)
              setselectedresult(item)
            }}>
            <IonicIcon name='download' size={28} color={colors.green}/>
            </TouchableOpacity>
        </View>
    ))
}
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
    containerStyle:{
        
    },
    title:{
        color:colors.black,
        fontSize:rp(2.4)
        ,fontFamily:fonts.Nregular
    }

})