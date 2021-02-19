import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';

const Account = ({ navigation }) => {
    return (
        <View>
            <Header title="Account" nav={navigation} />
            <Text>My account</Text>
        </View>
    );
};

export default Account;
