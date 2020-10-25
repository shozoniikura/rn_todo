import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import modules
import constants from './modules/constants';

// import Screens
import MainScreen from './screens/MainScreen';

// StackNavigator
const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen}
          initialParams={{getData}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
