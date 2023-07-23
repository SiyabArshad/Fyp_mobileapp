import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import React from 'react';
import * as Font from "expo-font";

import { LogBox } from 'react-native';
import Loading from './src/Components/Loading';
import Onboard from './src/Screens/Onboard';
import Login from './src/Screens/Login';
import Forgotpass from './src/Screens/Forgotpass';
import UpdateProfile from './src/Screens/UpdateProfile';
import Menu from './src/Screens/Menu';
import Home from './src/Screens/Home';
import Results from './src/Screens/Results';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabNavigation from './src/Components/TabNavigation';
import Attendance from './src/Screens/Attendance';
import ForegroundNotification from './src/Components/ForegroundNotification';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
//redux imports and others
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useSelector,useDispatch } from 'react-redux';
import {getCurrentuser } from './src/redux/auth/authaction';
import colors from './src/configs/colors';
import * as Notifications from 'expo-notifications';
import Toast from 'react-native-toast-message'; 

export default function App() {
  LogBox.ignoreAllLogs()
  const [fontsLoaded, error] = Font.useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'RobotoMono-Bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
    'RobotoMono-Light': require('./assets/fonts/RobotoMono-Light.ttf'),
    'RobotoMono-Medium': require('./assets/fonts/RobotoMono-Medium.ttf'),
    'RobotoMono-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
    'RobotoMono-SemiBold': require('./assets/fonts/RobotoMono-SemiBold.ttf'),
    'RobotoMono-Thin': require('./assets/fonts/RobotoMono-Thin.ttf'),
  });
  if(!fontsLoaded)
  {
    return <Loading visible={true}/>
  }
  return (
   <Provider store={store}>
     <NavigationContainer >
      <Routes/>
    </NavigationContainer>
   </Provider>
  );
}
const Routes=()=>{
  const [foregroundNotification, setForegroundNotification] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const dispatch=useDispatch()
  const userinfo=useSelector(state=>state?.authReducer)
  const[loading,setloading]=React.useState(false)
  const gettinguserstate=async()=>{
    setloading(true)
    try{
      dispatch(getCurrentuser()).finally(()=>setloading(false))      
    }
    catch{

    }
  }

  React.useEffect(() => {
      // Request notification permissions on app start
      (async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('You will not receive push notifications.');
        }
      })();
  
      const subscription = Notifications.addNotificationReceivedListener(notification => {
        // Set the notification in the state
        setForegroundNotification(notification);
        console.log('Received notification:', notification);
      });
          // Request notification permissions on app start
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('You will not receive push notifications.');
      }
    })();

    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(response => {
      // Handle the notification response here (e.g., navigate to a specific screen)
      console.log('Notification response:', response);
    });

    return () => {
      // Clean up the subscription when the component is unmounted
      subscription.remove();
      backgroundSubscription.remove();
    };
  }, []);
  React.useEffect(()=>{
    gettinguserstate()
   
  },[])
  if(loading)
  {
    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator size={24} color={colors.green}/></View>
  }
  return(
    <React.Fragment>
      {
    userinfo?.isLoggedIn===false?
    <Stack.Navigator initialroute="onboard" screenOptions={{headerShown:false}} >
    <Stack.Screen name="onboard" component={Onboard} />
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="forgot" component={Forgotpass}  />
  </Stack.Navigator>
  :
  <Stack.Navigator initialroute="onboard" screenOptions={{headerShown:false}} >
    <Stack.Screen name='home' component={TabNavigation}/>
    <Stack.Screen name='attendance' component={Attendance}/>
    <Stack.Screen name='edit' component={UpdateProfile}/>
    <Stack.Screen name="menu" component={Menu} />
    <Stack.Screen name='result' component={Results}/>
  
  </Stack.Navigator>
}
<ForegroundNotification notification={foregroundNotification} />
  </React.Fragment>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
