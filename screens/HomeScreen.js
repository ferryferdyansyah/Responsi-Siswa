import React from 'react'
import {ImageBackground, Text, View, StyleSheet} from 'react-native'

const HomeScreen = () => {
  return (
      <ImageBackground source={require('../assets/bg_port.jpg')} style={{width:400, height:900}}>
        <View style={{ width: 500, height: 900, marginTop:290}}>
          <Text style={{ fontSize: 24, fontWeight: 800, color: '#007260', marginLeft: 160}}>SISWA</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#007260', marginLeft: 55}}>( Sistem Informasi Mahasiswa )</Text>
            <View style={{ marginLeft: 15, marginRight:120, marginTop:10, shadowColor:'grey', shadowOffset:100 }}>
              <Text style={{textAlign:'justify'}}>Aplikasi ini merupakan aplikasi untuk mengetahui persebaran lokasi tempat tinggal mahasiswa/mahasiswi SIG angkatan 2021</Text>
              <Text style={{textAlign:'justify'}}>Aplikasi ini dibuat dengan :</Text>
              <Text style={{textAlign:'justify'}}>1. React Native</Text>
              <Text style={{textAlign:'justify'}}>2. App Script</Text>
              <Text style={{textAlign:'justify'}}>3. API</Text>
              <Text style={{textAlign:'justify'}}>4. FontAwesome5</Text>
              <Text style={{textAlign:'justify'}}>5. Backgorund Pict from Freepik</Text>
            </View>
        </View>
      </ImageBackground>
  )
}

export default HomeScreen