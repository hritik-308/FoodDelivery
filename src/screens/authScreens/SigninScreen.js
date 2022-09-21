import { View, Text,StyleSheet, TextInput } from 'react-native'
import React,{useState,useRef} from 'react'
import Header from '../../components/Header';
import { parameters, title } from '../../global/styles';
import { colors } from '../../global/styles';
import * as Animatable from 'react-native-animatable'
import { Icon ,Button,SocialIcon} from 'react-native-elements';


export default function SigninScreen({navigation}) {
  const[textInput2Focussed,settextInput2Focussed]=useState(false)

  const textInput1=useRef(1)
  const textInput2=useRef(2)


  return (
    <View>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}/>

      <View style={{marginVertical:10,marginHorizontal:10}}>
        <Text style={{...title,fontSize:20,fontWeight:"bold"}}>sign-in</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:"center"}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{marginTop:20}}>
        <View >
            <TextInput
            style={styles.TextInput1}
            placeholder="E-mail"
            ref={textInput1}
            />
        </View>
        <View style={styles.TextInput2}>
        <Animatable.View animation={textInput2Focussed ?"":"fadeInLeft"} duration={400} >
            <Icon
            name="lock"
            iconStyle={{color:colors.grey3,}}
            type="material"
            />
        </Animatable.View>
        <TextInput
            style={{width:"80%"}}
            placeholder="Password"
            ref={textInput2}
            onFocus={()=>{settextInput2Focussed(false)}}
            onBlur={()=>{
              settextInput2Focussed(true)
            }}
            />
        <Animatable.View animation={textInput2Focussed ?"":"fadeInLeft"} duration={300}>
        <Icon
            name="visibility-off"
            iconStyle={{color:colors.grey3,}}
            type="material"
            style={{marginRight:10}}

            />
        </Animatable.View>
        </View>
      </View> 
      <View style={{marginHorizontal:20,marginTop:30,}}>
       <Button
       title="SIGN IN"
       buttonStyle={parameters.styledButton}
       titleStyle={parameters.buttonTitle}
       onPress={()=>{navigation.navigate("DrawerNavigator")}}
       />
      </View>
      <View style={{alignItems:'center',marginTop:15}}>
        <Text style={{...styles.text1,textDecorationLine:"underline"}}>Forgot Password ?</Text>
      </View>
      <View style={{alignItems:'center',marginTop:30,marginBottom:30}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>OR</Text>
      </View>
      <View style={{marginHorizontal:10,marginTop:10}}>
        <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        style={styles.socialIcons}
        onPress={()=>{}}
        />
      </View>
      <View style={{marginHorizontal:10,marginTop:10}}>
        <SocialIcon
        title="Sign In With Google"
        button
        type="google"
        style={styles.socialIcons}
        onPress={()=>{}}
        />
      </View>
      <View style={{marginTop:25,marginLeft:20}}>
        <Text style={{...styles.text1,fontWeight:"bold"}}>New on XpressFood ?</Text>
      </View>
      <View style={{alignItems:"flex-end",marginHorizontal:20}}>
        <Button
        title="Create an account"
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:12,
        marginBottom:20,
        paddingLeft:15,
        borderRadius:12,
    },
    TextInput2:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:15


    },
    socialIcons:{
      borderRadius:12,
      height:50
    },
    createButton:{
      backgroundColor:"#fff",
      alignContent:"center",
      justifyContent:"center",
      borderRadius:12,
      borderWidth:1,
      borderColor:"#ff8c52",
      height:40,
      paddingHorizontal:20,
    },
    createButtonTitle:{
      color:"#ff8c52",
      fontSize:16,
      fontWeight:'bold',
      alignItems:"center",
      justifyContent:"center",
      
    }
})

