import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import modules
import { getData } from '../modules/webAPI';

export default function MainScreen(args) {
  const samples = [
    {title: "おはよう"},
    {title: "こんにちは"},
  ]
  const [todos, setTodos] = React.useState(samples);
  const {params} = args.route
  const {navigate} = useNavigation();

  // const updateData = async(data) => {
  //   console.log(data);
  //   console.log("updating todos");
    
  //   setTodos(data);
  //   console.log(todos);
  //   console.log("updated todos");
  // };
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View  sytle={styles.menuButtton}>
          <Button title="About" onPress={() => (navigate('About'))} />
        </View>
        <View  sytle={styles.menuButtton}>
          <Button title="データ更新" onPress={() => {(getData(setTodos))}} />
        </View>
        <StatusBar backgroundColor={"#0af"} />
      </View>
      <View style={styles.todos}>
        {todos.map((todo, index) => (
          <Text key={index}>{todo.title}</Text>
        ))}
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
  menu: {
    flexDirection: 'column',
    // justifyContent: 'flex-space',
  },
  menuButtton: {
    alignItems: 'stretch',
    margin: 20,
    backgroundColor: "red",
    height: 50,
  },
  todos: {
    flex: 9,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
