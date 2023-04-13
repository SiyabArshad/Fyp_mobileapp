import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { Permissions } from 'expo-permissions';
import * as FileSystem from 'expo-file-system';

export default function Results({navigation}) {
    const [isload,setisload]=React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false);
// Function to request permissions for Android
async function requestStoragePermission() {
    try {
      const granted = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (granted.status === 'granted') {
        console.log('Storage permission granted');
        return true;
      } else {
        console.log('Storage permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  
  // Function to download file
  async function downloadFile() {
    // File URL to download
    const fileUrl = 'https://www.freepik.com/free-photo/flag-pakistan_1179433.htm#query=png&position=1&from_view=keyword&track=sph';
    
    // Check for storage permission on Android
    if (Platform.OS === 'android') {
      const permission = await requestStoragePermission();
      if (!permission) {
        console.log('Storage permission denied');
        return;
      }
    } else {
      const permission = await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
      if (permission.status !== 'granted') {
        console.log('Storage permission denied');
        return;
      }
    }
  
    // Download file using fetch API
    const response = await fetch(fileUrl);
    const fileData = await response.blob();
  
    // Save file to device storage using FileSystem API
    const dirs = FileSystem.documentDirectory;
    const filePath = `${dirs}/myfile.png`;
    await FileSystem.writeAsStringAsync(filePath, fileData, { encoding: FileSystem.EncodingType.Base64 });
    console.log('File downloaded to', filePath);
  }
      
  return (
    <View style={styles.mnonb}>
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:rp(5)}}>
   <Text style={{fontSize:rp(5),fontFamily:fonts.Nextrabold}}>DIGI SCHOOL!</Text>
</View>
<View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:rp(2)}}>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nextrabold}}>Result!</Text>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nregular,marginLeft:5}}>here</Text>
</View>
<ScrollView showsVerticalScrollIndicator={false}>
{
    [1,2,3,4,5].map((item,i)=>(
        <View style={{borderWidth:1,borderColor:colors.green,marginBottom:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.7),borderRadius:rp(1),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{color:colors.black,fontFamily:fonts.Nregular}}>Mid Term Results</Text>
            <TouchableOpacity onPress={downloadFile}>
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