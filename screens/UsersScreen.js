import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UsersScreen = () => {
  const jsonUrl = 'https://script.google.com/macros/s/AKfycbx8f6AhL1Hev1gaoPWRrfigJu20tKeWVI7fuy42wDD340e6fLj-TA_cS3peCwRYZHcW/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        setDataUser(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        setDataUser(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleProfilePress = (id) => {
    navigation.navigate('Profile', { targetId: id });
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : (
        <ImageBackground style={{ height: "100%" }}
          resizeMode="cover"
          source={require("../assets/bg.jpg")}>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#39868d' }}>LIST TEMAN</Text>
          </View>

          <FlatList
            data={dataUser}
            onRefresh={() => { refreshPage() }}
            refreshing={refresh}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <View style={styles.card}>
                  <Image source={require("../assets/user.png")} style={{ width: 80, height: 80, borderRadius: 100, marginTop: 10, marginLeft: 10, marginRight: 10 }} />
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'white' }}>{item.nama}</Text>
                      <Text style={{ fontSize: 13, marginTop: 13, color: 'white', marginLeft: 10 }}>{item.gender}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity onPress={() => handleProfilePress(item.id)}
                        style={{ backgroundColor: 'white', width: 100, alignItems: 'center', marginBottom: 10, marginTop: 10, height: 30, justifyContent: 'center', borderRadius: 100 }}>
                        <Text style={{ color: '#007260' }}>More detail</Text>
                      </TouchableOpacity>

                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: 'grey',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    // height: 120,
    color: 'white'
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#007260',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7
  },
})

export default UsersScreen