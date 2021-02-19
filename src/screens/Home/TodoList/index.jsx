import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Header from '../../../components/Header';
import { NavigationContext } from '../../../store';

const TodoList = () => {
    const nav = useContext(NavigationContext);
    return (
        <View>
            <Header title='To-Do List' nav={nav} />
            <Text>TodoList</Text>
        </View>
    );
};

export default TodoList;
