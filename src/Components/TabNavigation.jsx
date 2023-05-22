import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcons from "react-native-vector-icons/Ionicons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { View } from 'react-native';
import colors from '../configs/colors';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Results from '../Screens/Results';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="homescreen"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.white,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          marginHorizontal: RFPercentage(1.5),
          marginBottom: RFPercentage(2),
          borderRadius: RFPercentage(3),
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.21,
          shadowRadius: 7.68,
          elevation: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'homescreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'md-person-circle' : 'md-person-circle-outline';
          }

          return (
            <View style={{ alignSelf: 'center'}}>
              <IonicIcons name={iconName} size={30} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="homescreen"
        component={Home}
        options={{
          tabBarShowLabel: false,
        }}
      />
      
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
