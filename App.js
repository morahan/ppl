import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, StyleSheet, Picker, Slider, Switch, TouchableOpacity, Button, Image } from 'react-native';
import styles from './styles/styles.js'

function App(){
  const [outputText, setOutputText] = useState('Ready to get started!?')
  // console.log()

  const logText = (input) => {
    console.log(input)
  }
    return (
      <View style={styles.Screen}>
        <View style={styles.head}>
          <Image source={require('./assets/icon.png')} style={styles.log, {height: 117, width: 117, alignSelf: "center"}}/>
          <Text style={styles.Welcome}>Welcome</Text>
        </View>

        <View style={styles.LogIn}>
          <Text style={styles.Text}>Sign Into Spotify</Text>
          <TextInput 
            placeholder='Email'
            style={styles.Input}
            onChangeText={logText}

            
          />
          <View>
            <Text style={styles.Text}>Log into Spotify Here below</Text>
          </View>
          <Text style={styles.Text}>Oops, I dont have an accout, im a dinosaur.</Text>
        </View>

        <View>
          <Text style={styles.Text}>{outputText}</Text>
          <Button title="button title here?" style={styles.Btn} onPress={() => setOutputText("Sign into Spotify Below")}/>

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
