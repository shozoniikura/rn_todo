import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';

// import WebAPI
import {ToDoRecord} from '../modules/webAPI';

export default function ToDo(props) {
  const {todo} = props;
  // console.log(props);
  return (
    <View style={styles.todo}>
      <CheckBox onValueChange={(x)=> {console.log(todo);todo.done()}} />
      <Text style={styles.todoText}>{todo.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
