import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 初期設定
import { PORT } from '@env'
console.log("PORT is ");
console.log(PORT);
1+2;
console.log("----");

// // import modules
// import constants from './modules/constants';

// import Screens
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

// StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen}
          options={{title: "ToDo"}}
          initialParams={{}}
        />
        <Stack.Screen name="About" component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
