import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
import AddSong from './components/addSong.js';
import LoginSpotify from './components/loginSpotify.js'

function App(){
  const [outputText, setOutputText] = useState('Ready to get started!?')
  const [listOfTracks, setListOfTracks] = useState([])
  // console.log()

  const logText = (input) => {
    console.log(input)
  }
    return (
      <SafeAreaView style={styles.Screen}>
        <View style={styles.head}>
          <Image source={require('./assets/icon.png')} style={styles.log, {height: 117, width: 117, alignSelf: "center"}}/>
          <Text style={styles.Welcome}>Welcome</Text>
        </View>
        <LoginSpotify></LoginSpotify>
        {/* <View style={styles.LogIn}>
          <View>
            <Text style={styles.Text}>{outputText}</Text>
            <Button title="Sign In" onPress={() => setOutputText("Sign into Spotify Above")} style={styles.Btn} />

          </View>
    
          <Text style={{ paddingTop: "10%" }, styles.Text}>Oops, I dont have an accout...  I'm a dinosaur.</Text>
          <Text style={{ paddingTop: "10%" }, styles.Text}>I'm a dinosaur.</Text>
        </View> */}

        {/* <AddSong></AddSong> */}

     
      </SafeAreaView>
    );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#44ace8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn1: {
//     backgroundColor: '#ffff',
//     color: '#000',
//     title: "Change Text",
//     font: 25,
//     onPress: () => setOutputText('Updated Text on page with button clickity click!')
//   }
// });
