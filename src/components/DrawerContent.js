import { View, Text,Linking,Pressable,Alert,Switch,StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
import { Avatar,Button,Icon } from 'react-native-elements'
import { colors } from '../global/styles'
import { DarkTheme } from '@react-navigation/native'

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor:colors.buttons,}}>
     <View style={{flexDirection:'row',alignItems:"center",paddingLeft:20,paddingVertical:10}}>
        <Avatar
        rounded
        avatarStyle={styles.avatar}
        size={75}
        source={{uri:"https://c4.wallpaperflare.com/wallpaper/894/492/7/mcdonalds-burger-hd-wallpaper-preview.jpg"}}
        />
        <View style={{marginLeft:10}}>
            <Text style={{fontWeight:"bold",color:colors.cardbackground,fontSize:18}}>Scott McCall</Text>
            <Text style={{color:colors.cardbackground,fontSize:14}}>scott@gmail.com</Text>
        </View>
       
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
     <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{marginLeft:10,alignItems:"center",justifyContent:"center",marginTop:5}}>
              <Text style={{fontWeight:"bold",color:"#fff",fontSize:18}}>1</Text>
              <Text style={{color:"#fff",fontSize:14}}>My Favourites</Text>

            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{marginLeft:110,alignItems:"center",justifyContent:"center",marginBottom:2}}>
              <Text style={{fontWeight:"bold",color:"#fff",fontSize:18}}>0</Text>
              <Text style={{color:"#fff",fontSize:14}}>My Cart</Text>
  
            </View>
            </View>
        </View>

     </View>
     </View>
     <DrawerItemList {...props} />
     <DrawerItem
     label="Payment"
     icon={({color,size})=>(
        <Icon
        type="material-community"
        name="credit-card-outline"
        color={color}
        size={size}
        />
     )}
     />
     <DrawerItem
     label="Promotions"
     icon={({color,size})=>(
        <Icon
        type="material-community"
        name="tag-heart"
        color={color}
        size={size}
        />
     )}
     />
      <DrawerItem
     label="Settings"
     icon={({color,size})=>(
        <Icon
        type="material-community"
        name="cog-outline"
        color={color}
        size={size}
        />
     )}
     />
     <DrawerItem
     label="Help"
     icon={({color,size})=>(
        <Icon
        type="material-community"
        name="lifebuoy"
        color={color}
        size={size}
        />
     )}
     />



     <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
        <Text style={styles.preferences}>Preferences</Text>

        <View style={styles.switchText}>
             <Text style={styles.darkthemeText}>Dark Theme</Text>
             <View style={{paddingRight:10}}>
               <Switch
               trackColor={{false: "#767577", true: "#81b0ff"}}
               thumbColor= "#f4f3f4"
               />
             </View>
        </View>
     </View>
     
     </DrawerContentScrollView>

     <DrawerItem
     label="Sign Out"
     icon={({color,size})=>(
        <Icon
        type="material-community"
        name="logout-variant"
        color={color}
        size={size}
        />
     )}
     />
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.pagebackground
        

    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:"bold"
    }
})
