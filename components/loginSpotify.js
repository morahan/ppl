import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
import axios from 'axios';

function LoginSpotify() {
    const [signIn, setSignIn] = useState('Log Into Spotify');
    const clickHandler = () => {
        setSignIn('Signing In...');
        axios.get('/login')
          .then(responce => console.log(responce.data))
          .catch(err => console.log(err))

    }
    return (
        <View style={styles.LogIn}>
            <View>
                <Text style={styles.Text}>{signIn}</Text>
                <Button style={styles.Btn} title='Sign In' onPress={clickHandler} />
            </View>
            <Text style={styles.Text}>Oops, I dont have an accout. </Text>
            <Text style={styles.Text2}>I'm a dinosaur...</Text>
        </View>
    );
}

export default LoginSpotify;
