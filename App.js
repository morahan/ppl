import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './styles/styles.js'

function App() {
  const [outputText, setOutputText] = useState('Ready to get started!?')
  // console.log()
    return (
      <View style={styles.container}>
        <View>
          <Text>Logo</Text>
          <Text>Welcome</Text>
        </View>

        <View>
          <Text>{outputText}</Text>
          <Button
            backgroundColor="#fff"
            color="#000"
            title="Change Text"
            onPress={() =>
              setOutputText("Get started by Signing into Spotify Below")
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
