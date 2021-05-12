import React from 'react';
import {StyleSheet, Text, Button, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput
          placeholder="Goals"
          style={{borderColor: 'black', borderWidth: 1, padding: 10}}
        />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
