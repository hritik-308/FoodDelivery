import {View, Text, StyleSheet, TextInput,Image} from 'react-native';
import React, {useState, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {colors} from "../../global/styles"
import Swiper from 'react-native-swiper';
import { parameters } from '../../global/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function SigninWelcomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex:4,justifyContent:"center"}}>
        <Swiper autoplay ={true}>
            <View style={styles.slide1}>
             <Image 
             source={{uri:"https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_47-SQ.jpg"}}
             style={{height:"100%",width:"100%"}}
             />
            </View>
            <View style={styles.slide2}>
             <Image 
             source={{uri:"https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content10735.jpg"}}
             style={{height:"100%",width:"100%"}}
             />
            </View>
            <View style={styles.slide3}>
             <Image 
             source={{uri:"https://media.istockphoto.com/photos/assorted-indian-recipes-food-various-picture-id922783734?k=20&m=922783734&s=612x612&w=0&h=_oV4oOrb8kC4RVgAI6RrGfQ8lIKsnP89lwwjHfhxUzQ="}}
             style={{height:"100%",width:"100%"}}
             />
            </View>
        </Swiper>
      </View>
      <View style={{flex:4,justifyContent:"flex-end",marginBottom:20}}>
      <View style={{marginHorizontal:20,marginTop:30,}}>
       <Button
       title="SIGN IN"
       buttonStyle={parameters.styledButton}
       titleStyle={parameters.buttonTitle}
       onPress={()=>{navigation.navigate("SigninScreen")}}
       />
      </View>
      <View style={{marginHorizontal:20,marginTop:30}}>
        <Button
        title="Create an account"
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        />
      </View>
      </View>
    </View>
  );
}


const styles=StyleSheet.create({

    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#9DD6EB",
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#97CAE5",
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#92BBD9",
    },
    createButton:{
      backgroundColor:"#fff",
      alignContent:"center",
      justifyContent:"center",
      borderRadius:12,
      borderWidth:1,
      borderColor:colors.buttons,
      height:50,
      paddingHorizontal:20,
    },
    createButtonTitle:{
      color:colors.grey1,
      fontSize:20,
      fontWeight:'bold',
      alignItems:"center",
      justifyContent:"center",
      
    }
})
