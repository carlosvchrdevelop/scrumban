import React from 'react';
import { Header as DefaultHeader, Right, Left, Body, Icon, Button, H1 } from 'native-base';
import { StyleSheet } from 'react-native';

const Header = ({title,  nav}) => {
    return (
        <DefaultHeader>
            <Left>
            <Button transparent onPress={() => nav.toggleDrawer()}>
                <Icon name='menu' />
            </Button>
            </Left>
            <Body>
            <H1 style={styles.textTitle}>{title}</H1>
            </Body>
            <Right>
            <Button transparent>
                <Icon name='ellipsis-vertical' />
            </Button>
            </Right>
        </DefaultHeader>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        color: '#ffffff'
    }
});

export default Header;
