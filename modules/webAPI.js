import React from 'react';

import constants from './constants';

const axios = require('axios');

export const getData = (funcEffect) => {
  const url = constants.urlToDos;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.map((todo) => new ToDoRecord(todo));
      funcEffect(data);
      return data;
    })
    .catch((error) => {
      console.log('error is below');
      console.log(error);
      console.log('------');
    });
}

export class ToDoRecord {
  constructor(props) {
    this.id = props.id;
    this.priority = props.priority;
    this.title = props.title;
  }
}