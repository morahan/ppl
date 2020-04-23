import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, StyleSheet, Picker, Slider, Switch, TouchableOpacity, Button, Image } from 'react-native';
import styles from './styles/styles.js'

function App(){
  const [outputText, setOutputText] = useState('Ready to get started!?')
  // console.log()
    return (
      <View style={styles.container}>
        <View style={{padding: 25}}>
          <Text style={styles.Text}>Logo</Text>
          <Image source={require('./assets/icon.png')} style={{height: 117, width: 117}}/>
          <Text style={styles.Text}>Welcome</Text>
        </View>

        <View>
          <Text style={styles.Text}>Sign Into Spotify</Text>
          <TextInput placeholder={'Email'}/>
          <View>
            <Text style={styles.Text}>Log into Spotify Here</Text>
          </View>
          <Text style={styles.Text}>Oops, I dont have an accout, im a dinosaur.</Text>
        </View>

        <View>
          <Text>{outputText}</Text>
          <Button
            backgroundColor="#fff"
            color="#000"
            title="Change Text"
            onPress={() =>
              setOutputText("Sign into Spotify Below")
            }
          />

        </View>
      </View>
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
