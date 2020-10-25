import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';


import { getData } from '../modules/webAPI';

export default function MainScreen(args) {
  const {params} = args.route
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="データ更新" onPress={getData} />
      <StatusBar backgroundColor={"#0af"} />
      <Button title="About" onPress={() => (navigate('About'))} />
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
