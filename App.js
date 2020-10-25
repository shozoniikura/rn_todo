import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import constants from './modules/constants';

export default function App() {
  const getData = () => {
    const url = constants.urlToDos;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log('error is below');
        console.log(error);
        console.log('------');
      });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="データ更新" onPress={getData} />
      <StatusBar backgroundColor={"#0af"} />
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
