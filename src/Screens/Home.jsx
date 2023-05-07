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
export default function Home({navigation}) {
    const [isload,setisload]=React.useState(false)
    React.useEffect(()=>{
      setisload(true)
      setTimeout(() => {
        setisload(false)
      }, 3000);
    },[])
   return (
    <View style={styles.mnonb}>
 <Loading visible={isload}/>
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(5)}}>
   <Text style={{fontSize:rp(5),fontFamily:fonts.Nextrabold}}>DIGI SCHOOL!</Text>
</View>
<View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:rp(2)}}>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nextrabold}}>Welcome!</Text>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nregular,marginLeft:5}}>Ahdmed Ppik</Text>
</View>
<Enrollments navigation={navigation}/>

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