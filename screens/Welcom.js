import React from 'react'
import { Text, TouchableOpacity, Button, View, StyleSheet, Image, ImageBackground } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import ButtomTabs from './HomeScreen'
import { TouchableHighlight } from 'react-native-gesture-handler'
// import LinearGradient from 'react-native-linear-gradient'
// import Viga from '../assets/Viga-Regular.tff'

const Welcom = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
    style={{height:"100%"}}
    resizeMode="cover"
    source={require("../assets/picts1.jpg")}>
      {/* <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}> */}
      <View style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
        <Text style={{ fontSize: 40, fontWeight: 800, color:'#007260', fontFamily:'normal' }}>Family First</Text>
        <Text style={{ fontSize: 40, fontWeight: 800, color:'#007260', marginTop:-10 }}>Friend's Forever</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Text>Temukan Keunikan di Setiap Lokasi, Raih Kenangan Tak</Text>
        <Text> Terlupakan dengan Teman-Temanmu!</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 600, marginLeft:50, marginRight:50 }}>
        <TouchableHighlight onPress={handleNextPress}
          style={{
            backgroundColor: '#007260', paddingVertical: 15, paddingHorizontal: 20, borderRadius: 20, alignItems: 'center',
            justifyContent: 'center', width: 300, marginTop: 1, alignItems: 'center'
          }}>
          <Text style={{color:'#fff', fontSize:16, fontWeight:500}}>Continue</Text>
        </TouchableHighlight>
      </View>
      {/* </View> */}
    </ImageBackground>
  )
}

export default Welcom

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  header:{
    color: 'black',
    fontWeight: 'bold',
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:20,
  }
})