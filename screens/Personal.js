import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ImageBackground, Text, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Personal = () => {
  const navigation = useNavigation()
  const handleQuitPress = () => {
    navigation.navigate('Explore')
  }
  return (
    <View style={{ height: 610, backgroundColor: 'white' }}>
      <ImageBackground
        style={{ height: 170 }}
        source={require("../assets/bg.jpg")}>
        <Image source={require("../assets/profile.jpg")} style={{ width: 125, height: 125, borderRadius: 100, marginLeft: 15, marginTop: 100, borderColor:'#007260', borderWidth:4 }} />
      </ImageBackground>
      {/* <View style={{backgroundColor:'red', height:170}}>
          <Image source={require("../assets/profile.jpg")} style={{width:125,height:125, borderRadius:100, marginLeft:15, marginTop:100}} />
        </View> */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginLeft: 15, marginTop: 75, fontSize: 24, color: 'black', fontWeight: 'bold' }}>Ferry Ferdyansyah</Text>
        <Text style={{ marginLeft: 5, marginTop: 82, fontSize: 14, color: 'black' }}>(He/Him)</Text>
      </View>
      <View>
        <Text style={{ marginLeft: 15, marginTop: 0, fontSize: 16, color: 'black' }}>Third Year Student at Gadjah Mada University</Text>
        <Text style={{ marginLeft: 15, marginTop: 17, fontSize: 16, color: 'black' }}>Universitas Gadjah Mada (UGM)</Text>
        <Text style={{ marginLeft: 15, marginTop: 0, fontSize: 15, color : 'grey' }}>Sleman, Daerah Istimewa Yogyakarta, Indonesia</Text>
      </View>
      <View>
        <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 14, color: '#007260', fontWeight: 'bold' }}>500 koneksi</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{
          backgroundColor: "#007260", width: 150, marginLeft: 15, alignItems: 'center', height: 35, justifyContent: 'center',
          marginTop: 15, borderRadius: 50
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Terbuka untuk</Text>
        </TouchableOpacity>
        <TouchableHighlight style={{
          backgroundColor: "#ffffff", width: 150, marginLeft: 15, alignItems: 'center', height: 35, justifyContent: 'center',
          marginTop: 15, borderRadius: 50, borderWidth: 1, borderColor: '#007260'
        }}>
          <Text style={{ color: '#007260', fontWeight: 'bold' }}>Tambahkan bagian</Text>
        </TouchableHighlight>
      </View>
      <View style={{marginTop:15, flexDirection:'row', borderColor:'grey', borderWidth:0.5, marginLeft:15, marginRight:15, borderRadius:10, 
      height:90, justifyContent:'center', alignItems:'center'}}>
        <Text style={{ fontSize: 14, color: '#007260', fontWeight: 'bold', width:305 }}>
          Tunjukkan kepada perekrut bahwa Anda terbuka untuk bekerja - Anda yang menentukan siapa yang dapat melihatnya</Text>
        <FontAwesome5 name="times" size={20} style={{marginTop:-35, marginLeft:5}}/>
      </View>
      <View style={{width:150, height:35}}>
        <TouchableOpacity onPress={handleQuitPress} style={{
          backgroundColor: "red", width: 150, marginLeft: 15, alignItems: 'center', height: 35, justifyContent: 'center',
          marginTop: 15, borderRadius: 50
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Keluar Aplikasi</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'white', height:200, marginTop:25}}>
        <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 20, color: 'black', fontWeight: 'bold' }}>Disarankan untuk Anda</Text>
        <View style={{flexDirection:'row'}} >
          <FontAwesome5 name="eye" style={{marginLeft:15, marginTop:10, fontWeight:'bold'}} />
          <Text style={{ marginLeft: 5, marginTop: 5 }} >Pribadi</Text>
        </View>
      </View>
    </View>
  )
}

export default Personal;