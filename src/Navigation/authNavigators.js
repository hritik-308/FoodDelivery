import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen'
import SigninScreen from '../screens/authScreens/SigninScreen'
import HomeScreen from '../screens/HomeScreen'
import RootClientTabs from './ClientTabs'
import RestaurantMapScreen from '../screens/RestaurantMapScreen'
import DrawerNavigator from './DrawerNavigator'


const Auth = createStackNavigator()
export default function AuthStack() {
  return (
    <Auth.Navigator>
        <Auth.Screen 
        name="SigninWelcomeScreen"
        component={SigninWelcomeScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        />
         <Auth.Screen 
        name="SigninScreen"
        component={SigninScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        />
         <Auth.Screen 
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        />
         <Auth.Screen 
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        />


       

    </Auth.Navigator>
  )
}

