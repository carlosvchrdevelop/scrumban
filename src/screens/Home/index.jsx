import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Backlog from './Backlog';
import TodoList from './TodoList';
import Projects from './Projects';
import { NavigationContext } from '../../store';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
      <NavigationContext.Provider value={ navigation }>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch( route.name ){
                case 'Backlog':
                  return (
                    <Ionicons
                      name={focused ? 'layers' : 'layers-outline'}
                      size={size}
                      color={color}
                    />
                  );
                case 'TodoList':
                  return (
                    <Ionicons
                      name={focused ? 'grid' : 'grid-outline'}
                      size={size}
                      color={color}
                    />
                  );
                case 'Projects':
                  return (
                    <Ionicons
                      name={focused ? 'cube' : 'cube-outline'}
                      size={size}
                      color={color}
                    />
                  );
              }
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Backlog" component={Backlog} />
          <Tab.Screen name="TodoList" component={TodoList} options={{ tabBarBadge: 4 }} />
          <Tab.Screen name="Projects" component={Projects} />
        </Tab.Navigator>
      </NavigationContext.Provider>
    );
};

export default Home;
