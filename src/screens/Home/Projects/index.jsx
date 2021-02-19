import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Header from '../../../components/Header';
import { NavigationContext } from '../../../store';

const Projects = () => {
    const nav = useContext(NavigationContext);
    return (
        <View>
            <Header title='Projects' nav={nav} />
            <Text>Projects</Text>
        </View>
    );
};

export default Projects;
