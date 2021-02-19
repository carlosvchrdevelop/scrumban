import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Config from './src/screens/Settings';
import Account from './src/screens/Account';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Settings" component={Config} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
