import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
          initialParams={{}}
        />
        <Stack.Screen name="About" component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
