import React from 'react';

import constants from './constants';

export const getData = () => {
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
}