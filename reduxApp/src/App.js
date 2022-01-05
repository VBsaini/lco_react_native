import React, {useEffect} from 'react';

// for react navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './store';
//screens
import Home from './screens/Home';
import Add from './screens/Add.js';

const Stack = createStackNavigator();

// setting the header as default in all screen
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#0f4c75" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'LCO Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
