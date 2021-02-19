import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Header from '../../../components/Header';
import { NavigationContext } from '../../../store';

const Backlog = () => {
    const nav = useContext(NavigationContext);
    return (
        <View>
            <Header title='Backlog' nav={nav}/>
            <Text>Backlog</Text>
        </View>
    );
};

export default Backlog;
