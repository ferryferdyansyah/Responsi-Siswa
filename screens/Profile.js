import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, TouchableHighlight, Linking, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const Profile = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbx8f6AhL1Hev1gaoPWRrfigJu20tKeWVI7fuy42wDD340e6fLj-TA_cS3peCwRYZHcW/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [targetId, setTargetId] = useState(null);

    const route = useRoute();
    const navigation = useNavigation()
    const handleReturnPress = () => {
        // navigation.navigate('Users')
        navigation.navigate('HomePage')
    }

    useEffect(() => {
        const { targetId: routeTargetId } = route.params;
        if (routeTargetId) {
            setTargetId(routeTargetId);
        } else {
            setTargetId(null);
        }

        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                setDataUser(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [route.params]);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                setDataUser(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    if (targetId === null) {
        return (
            <SafeAreaView>
                <View>
                    <Text style={{color:'black'}}>Loading...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={dataUser.filter(item => item.id === targetId)}
                    onRefresh={() => { refreshPage() }}
                    refreshing={refresh}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ height: 470, backgroundColor: 'white', borderColor: 'black' }}>
                            <ImageBackground
                                style={{ height: 170 }}
                                source={require("../assets/bg.jpg")}>
                                <Image source={require("../assets/user.png")} style={{ width: 125, height: 125, borderRadius: 100, marginLeft: 15, marginTop: 100 }} />
                            </ImageBackground>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 15, marginTop: 75, fontSize: 24, color: 'black', fontWeight: 'bold' }}>{item.nama}</Text>
                                <Text style={{ marginLeft: 5, marginTop: 82, fontSize: 14, color: 'black' }}>{item.gender}</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 15, marginTop: 0, fontSize: 16, color: 'black' }}>{item.deskripsi}</Text>
                                <Text style={{ marginLeft: 15, marginTop: 17, fontSize: 16, color: 'black' }}>Universitas Gadjah Mada (UGM)</Text>
                                <Text style={{ marginLeft: 15, marginTop: 0, fontSize: 15, color: 'grey' }}>{item.latitude}, {item.longitude}</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 14, color: '#007260', fontWeight: 'bold' }}>{item.total} koneksi</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/+62${item.nomor}`)} style={{
                                    backgroundColor: "#007260", width: 40, marginLeft: 15, alignItems: 'center', height: 40, justifyContent: 'center',
                                    marginTop: 15, borderRadius: 50
                                }}>
                                    <FontAwesome5 name="whatsapp" size={20} style={{color:'white'}} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL(`google.navigation:q=${item.latitude}, ${item.longitude}`)} style={{
                                    backgroundColor: "#007260", width: 40, marginLeft: 15, alignItems: 'center', height: 40, justifyContent: 'center',
                                    marginTop: 15, borderRadius: 50
                                }}>
                                    <FontAwesome5 name="street-view" size={20} style={{color:'white'}} />
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                                    { text: 'Tidak', onPress: () => console.log('button tidak') },
                                    { text: 'Ya', onPress: () => deleteData(item.id) },
                                ])} style={{
                                    backgroundColor: "red", width: 40, marginLeft: 15, alignItems: 'center', height: 40, justifyContent: 'center',
                                    marginTop: 15, borderRadius: 50
                                }}>
                                    <FontAwesome5 name="trash-alt" size={20} style={{color:'white'}} />
                                </TouchableOpacity> */}
                                <TouchableHighlight onPress={handleReturnPress} style={{
                                    backgroundColor: "#ffffff", width: 150, marginLeft: 15, alignItems: 'center', height: 40, justifyContent: 'center',
                                    marginTop: 15, borderRadius: 50, borderWidth: 1, borderColor: '#007260'
                                }}>
                                    <Text style={{ color: '#007260', fontWeight: 'bold' }}>Kembali</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

export default Profile