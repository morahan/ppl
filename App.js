import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './styles/styles.js'

function App() {
  const [outputText, setOutputText] = useState('Aye Yo, My text is starting to show!')
  // console.log()
    return (
      <View style={styles.container}>
        <Text>{outputText}</Text>
        <Button 
          // style={styles.button, styles.btn1}
          backgroundColor='#fff'
          // borderradius='20'
          color='#000'
          title="Change Text" 
          onPress={() => setOutputText('Updated Text on page with button clickity click!')}
        />
        {/* <TouchableOpacity style={styles.btn1}>
          <Text>hello World </Text>
        </TouchableOpacity>  */}
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
