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

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.menu}>
          <View sytle={styles.menuButtton}>
            <Button title="About" onPress={() => (navigate('About'))} />
          </View>
          {/* <View style={styles.menuButtton} /> */}
          {/* <View sytle={styles.menuButtton}>
            <Button title="データ更新" onPress={() => {(getData(setTodos))}} />
          </View> */}
          <StatusBar backgroundColor={"#0af"} />
        </View>
      </View>
      <View style={styles.todoContainer}>
        <View style={styles.todos}>
          {todos.map((todo, index) => (
            <View style={styles.todo} key={index}>
              <Text key={index} style={styles.todoText}>{todo.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuButtton: {
    padding: 20,
    margin: 30,
  },
  todoContainer: {
    flex: 9,
    flexDirection: "row",
  },
  todos: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: '#00f',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  todo:{
    flexDirection: "row",
    // backgroundColor: '#aaa',
    marginBottom: 10,
    marginLeft: 20,
  },
  todoText: {
    fontSize: 25,
  },
});
