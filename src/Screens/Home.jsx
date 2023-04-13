import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MessageCard from '../Components/MessageCard';
import SearchBox from '../Components/SearchBox';
import golfCourses from '../configs/golfcourses';
import Coursecard from '../Components/Coursecard';
import { BottomSheet, Button, ListItem } from "react-native-elements"
export default function Home({navigation}) {
    const [isload,setisload]=React.useState(false)
    const [search,setsearch]=React.useState("")
    const [isVisible, setIsVisible] = React.useState(false);
    const [statename,setstatename]=React.useState("All")
    const callsearch=(state)=>{
        setsearch(state)
    }
    const list = [
        { name: "Florida" },
        { name: "California"},
        { name: "Texas"},
        { name: "Arizona"},
        { name: "North Carolina"},
        { name: "South Carolina"},
        { name: "Georgia"},
        { name: "Nevada"},
        { name: "Hawaii"},
        { name: "Virginia"}
      ]
      
  return (
    <View style={styles.mnonb}>
         <BottomSheet modalProps={{}} isVisible={isVisible}>
         <ListItem
          containerStyle={styles.containerStyle}
        >
          <ListItem.Content onPress={()=>{
            setstatename("All")
            setIsVisible(false)
            }}>
            <ListItem.Title style={styles.title}>All</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      {list.map((item, i) => (
        <ListItem
        onPress={()=>{
            setstatename(item.name)
            setIsVisible(false)
        }
        }
          key={i}
          containerStyle={styles.containerStyle}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(5)}}>
   <Text style={{fontSize:rp(5),fontFamily:fonts.Nextrabold}}>JustGolf!</Text>
  <Pressable onPress={()=>setIsVisible(true)}>
  <IonicIcon name="filter-sharp" size={30} color={colors.black} />
  </Pressable>
</View>
<SearchBox callinp={callsearch}/>
<Text style={{marginVertical:rp(2),color:colors.black,fontSize:rp(3),fontFamily:fonts.Nextrabold}}>Courses</Text>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
{
    golfCourses?.map((item,i)=>(
        <Coursecard navigation={navigation} key={i} detail={item}/>
    ))
}
</View>
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