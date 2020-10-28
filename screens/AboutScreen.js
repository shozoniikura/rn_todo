import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AboutScreen(args) {
  // const {params} = args.route
  return (
    <View style={styles.container}>
      <Text style={styles.largeFont}>About</Text>
      <Text style={styles.largeFont}>Author: NIIKURA Shozo</Text>
      <Text style={styles.largeFont}>Since 2020.10.25</Text>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eca',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeFont: {
    fontSize: 25,
  },
});
