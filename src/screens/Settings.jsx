import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';

const Settings = ({ navigation }) => {
    return (
        <View>
            <Header title="Settings" nav={navigation} />
            <Text>Settings</Text>
        </View>
    );
};

export default Settings;
