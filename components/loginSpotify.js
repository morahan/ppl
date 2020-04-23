import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';

function LoginSpotify() {

    return (
            <View style={styles.LogIn}>
                <View>
                    <Text style={styles.Text}>Login Below</Text>
                    <Button title="Sign In" onPress={() => setOutputText("Sign into Spotify Above")} style={styles.Btn} />
                </View>

                <Text style={{ paddingTop: "20%" }, styles.Text}>Oops, I dont have an accout...  I'm a dinosaur.</Text>
                <Text style={{ paddingTop: "1%" }, styles.Text}>I'm a dinosaur...</Text>
            </View>
    );
}

export default LoginSpotify;
