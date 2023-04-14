import { View, Text,Modal,TouchableOpacity,Pressable,Image,StyleSheet,ImageBackground,Dimensions,Platform,Linking,ActivityIndicator,TextInput,ScrollView,FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import fonts from "../configs/fonts"
import colors from '../configs/colors'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import IonicIcon from 'react-native-vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system';
const { StorageAccessFramework } = FileSystem;
import Loading from "../Components/Loading"
export default function Results({navigation}) {
    const [isload,setisload]=React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false);
    const [downloadProgress, setDownloadProgress] = React.useState();
    const downloadPath = FileSystem.documentDirectory + (Platform.OS == 'android' ? '' : '');
    const ensureDirAsync = async (dir, intermediates = true) => {
      const props = await FileSystem.getInfoAsync(dir)
      if (props.exist && props.isDirectory) {
          return props;
      }
      let _ = await FileSystem.makeDirectoryAsync(dir, { intermediates })
      return await ensureDirAsync(dir, intermediates)
  }
  const downloadCallback = downloadProgress => {
    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
};
const downloadFile = async (fileUrl) => {
  if (Platform.OS == 'android') {
    const dir = ensureDirAsync(downloadPath);
  }

  let fileName = fileUrl.split('Result/')[1];
  //alert(fileName)
  const downloadResumable = FileSystem.createDownloadResumable(
    fileUrl,
    downloadPath + fileName,
    {},
    downloadCallback
  );
  const saveAndroidFile = async (fileUri, fileName = 'File') => {
    try {
      const fileString = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
      
      const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (!permissions.granted) {
        return;
      }

      try {
        await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'application/pdf')
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, fileString, { encoding: FileSystem.EncodingType.Base64 });
            alert('Report Downloaded Successfully')
          })
          .catch((e) => {
          });
      } catch (e) {
        throw new Error(e);
      }

    } catch (err) {
    }
  }
  try {
    const { uri } = await downloadResumable.downloadAsync();
    if (Platform.OS == 'android')
      saveAndroidFile(uri, fileName)
    else
      saveIosFile(uri);
  } catch (e) {
    console.error('download error:', e);
  }
}
const saveIosFile = (fileUri) => {
  // your ios code
  // i use expo share module to save ios file
}
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
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nextrabold}}>Result!</Text>
   <Text style={{fontSize:rp(3),fontFamily:fonts.Nregular,marginLeft:5}}>here</Text>
</View>
<ScrollView showsVerticalScrollIndicator={false}>
{
    [1,2,3,4,5].map((item,i)=>(
        <View style={{borderWidth:1,borderColor:colors.green,marginBottom:rp(1),paddingHorizontal:rp(2),paddingVertical:rp(1.7),borderRadius:rp(1),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{color:colors.black,fontFamily:fonts.Nregular}}>Mid Term Results</Text>
            <TouchableOpacity onPress={()=>downloadFile("https://drive.google.com/file/d/1JR06fL6UVSBqlXAfWBFVnfJRr6pCLVnv/view?usp=drivesdk")}>
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