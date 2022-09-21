import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen.js'
import { colors } from "../global/styles.js";
import SearchScreen from "../screens/SearchScreen"
import MyOrdersScreen from "../screens/MyOrdersScreen.js";
import MyAccountScreen from "../screens/MyAccountScreen.js";
 
const ClientTabs=createBottomTabNavigator();


export default function RootClientTabs(){

    return (
       <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor:colors.buttons
            }}
        
       >
        <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={
            {
                headerShown:false,
                tabBarLabel:"Home",
                tabBarIcon: ({color,size})=>(
                    <Icon
                    name="home"
                    type="material"
                    color={color}
                    size={size}

                    />
                )
            }
        }
        />

<ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={
            {
                headerShown:false,
                tabBarLabel:"Search",
                tabBarIcon: ({color,size})=>(
                    <Icon
                    name="search"
                    type="material"
                    color={color}
                    size={size}

                    />
                )
            }
        }
        />
        <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={
            {
                tabBarLabel:"My Orders",
                tabBarIcon: ({color,size})=>(
                    <Icon
                    name="view-list"
                    type="material"
                    color={color}
                    size={size}

                    />
                )
            }
        }
        />
         <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={
            {
                tabBarLabel:"My Account",
                tabBarIcon: ({color,size})=>(
                    <Icon
                    name="person"
                    type="material"
                    color={color}
                    size={size}

                    />
                )
            }
        }
        />
       </ClientTabs.Navigator>
    )
}