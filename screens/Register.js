import { React, useState } from 'react'
import { Text, Alert, TouchableOpacity, View, SafeAreaView, ImageBackground, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [confirm, setConfirm] = useState('')
    const navigation = useNavigation()

    const nextPage = () => {
        if (!email || !username || !password || !confirm) {
            Alert.alert('Invalid Credentials', 'Fill all the fields');
        } else if (password !== confirm) {
            Alert.alert('Invalid Credentials', 'Password and confirm password do not match.');
        } else {
            // Semua kondisi valid, lakukan navigasi ke halaman berikutnya
            navigation.navigate('HomePage');
        }
    };


    return (
        <SafeAreaView>
            <ImageBackground style={{ height: "100%" }}
                resizeMode="cover"
                source={require("../assets/bg.jpg")}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 350, height: 500, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: 'grey', borderRadius: 10 }}>
                        <View style={{ alignItems: 'center', marginBottom:10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 10, fontSize: 20 }}>Register</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 10, marginTop: 10 }}>Username</Text>
                            <TextInput placeholder='Enter your username' style={{ height: 40, borderWidth: 1, width: 270, borderRadius:5 }} value={username} onChangeText={(text) => setUsername(text)} />
                            <Text style={{ marginBottom: 10, marginTop: 10 }}>Email</Text>
                            <TextInput placeholder='Enter your email' style={{ height: 40, borderWidth: 1, width: 270, borderRadius: 5 }} value={email} onChangeText={(text) => setEmail(text)} />
                            <Text style={{ marginBottom: 10, marginTop: 10 }}>Password</Text>
                            <TextInput placeholder='Enter your password' style={{ height: 40, borderWidth: 1, width: 270, borderRadius: 5 }} value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                            <Text style={{ marginBottom: 10, marginTop: 10 }}>Confirm Password</Text>
                            <TextInput placeholder='Confirm your password' style={{ height: 40, borderWidth: 1, width: 270, borderRadius: 5 }} value={confirm} secureTextEntry={true} onChangeText={(text) => setConfirm(text)} />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <TouchableOpacity onPress={nextPage} style={{ backgroundColor: '#007260', width: 270, height: 40, alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Register