import React from 'react';
import {View,Text,StyleSheet ,StatusBar, LogBox} from 'react-native';
import { colors } from './src/global/styles';
import RootNavigator from './src/Navigation/RootNavigator';
import SigninScreen from './src/screens/authScreens/SigninScreen';
import SigninWelcomeScreen from './src/screens/authScreens/SigninWelcomeScreen';

export default function App( ) {
  LogBox.ignoreAllLogs()
  return(
    <View style={styles.container}>
      {/* <SigninWelcomeScreen/>
      <SigninScreen/> */}
      <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      />
      <RootNavigator/>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1
  }
})
