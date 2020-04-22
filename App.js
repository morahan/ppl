import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Aye Yo, My text is starting to show!')
  // componentDidMount() {
    return (
      <View style={styles.container}>
        <Text>{outputText}</Text>
        <Button 
          color='#ffff'
          title="Change Text" 
          onPress={() => setOutputText('Updated Text on page with button clickity click!')}
        />
        {/* <Button title="helloWorld" /> */}
      </View>
    );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44ace8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
