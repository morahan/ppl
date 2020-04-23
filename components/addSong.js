import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';


function addSong() {
    const [searchedSong, setSearchedSong] = useState('');
    const [songList, setSongList] = useState([]);

    const songSearchHandler = (searchedSong) => {
        console.log(searchedSong);
    }
    return (
        <View style={styles.Search}>
            <Text style={styles.Text}>Search Spotify for Track</Text>
            <TextInput
                placeholder='track name'
                style={styles.Input}
                onChangeText={songSearchHandler}
            />
            <Button title="search" style={styles.Btn} />
        </View>
    );
}

export default addSong;