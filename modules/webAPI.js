import React from 'react';

import constants from './constants';

const axios = require('axios');

export const getData = (funcEffect) => {
  const url = constants.urlToDos;
  let data;
  console.log(url);
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data = json.map((todo) => new ToDoRecord(todo));
      // console.log(data);
      // console.log("getData is finished.")
      funcEffect(data);
      return data;
    })
    .catch((error) => {
      console.log('error is below');
      console.log(error);
      console.log('------');
    });
  return  data;
}

export class ToDoRecord {
  constructor(props) {
    this.id = props.id;
    this.priority = props.priority;
    this.title = props.title;
  }
}