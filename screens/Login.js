import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, ImageBackground, Alert } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    const handleNextPage = () => {
    // Ganti nilai username dan password sesuai yang diinginkan
    const validUsername = 'Alex@email.com';
    const validPassword = '123';

    if (email === validUsername && password === validPassword) {
      navigation.navigate('HomePage');
    } else if (email === null || password === null || email === '' || password === '') {
        Alert.alert('Invalid Credentials', 'Fill in both username and password fields');
    } else {
      Alert.alert('Invalid Credentials', 'Username or password is incorrect.');
    }
  };
  
    return (
        <SafeAreaView>
            <ImageBackground style={{ height: "100%" }}
                resizeMode="cover"
                source={require("../assets/bg.jpg")}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 350, height: 350, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: 'grey', borderRadius: 10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 10, fontSize: 20 }}>Login</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 5 }}>Email</Text>
                            <TextInput placeholder='Enter your email' style={{ height: 40, borderWidth: 1, width: 270 }} value={email} onChangeText={(text) => setEmail(text)} />
                            <Text style={{ marginTop: 15, marginBottom: 1 }}>Password</Text>
                            <TextInput placeholder='Enter your password' style={{ height: 40, borderWidth: 1, width: 270, marginTop: 10 }} value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
                        </View>
                        <View style={{ marginTop: 35 }}>
                            <TouchableOpacity onPress={handleNextPage} style={{ backgroundColor: '#007260', width: 270, height: 40, alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Register')
                            }} style={{ backgroundColor: '#fff', width: 270, height: 40, alignItems: 'center', borderRadius: 10, justifyContent: 'center', marginTop: 10, borderWidth: 1, borderColor: '#007260' }}>
                                <Text style={{ color: '#007260' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login