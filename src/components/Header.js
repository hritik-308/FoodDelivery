import React from "react";
import {View,Text,StyleSheet,Dimensions} from 'react-native'
import {colors,parameters} from '../global/styles'
import { Icon } from "react-native-elements";
import SigninWelcomeScreen from "../screens/authScreens/SigninWelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";


export default function Header({title,type,navigation}) {
    return(
        <View style={styles.header}>
           <View>
            <Icon
            type="material-community"
            name={type}
            color={colors.headerText}
            size={28}
            onPress={()=>{navigation.goBack()}}
            />
           </View>
            <View>
                <Text style={styles.headerTexts}>{title}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    },
    headerTexts:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:'bold',
        marginLeft:30

    }
})