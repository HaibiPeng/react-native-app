import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../Theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        height: 60,
        backgroundColor: Theme.colors.tabBackgroundColor,
    },
    // ...
});

// const onPressFunction = (pressable) => {
//     if (pressable) {
//         Alert.alert('You pressed the text!');   
//     }
//     console.log('You pressed the text!');
// };

const appTabList = [
    {tabLabel: 'Repositories', path: '/'},
    {tabLabel: 'Sign in',path: '/signin'},
    {tabLabel: 'Sign up',path: '/signin'},
    {tabLabel: 'Search',path: '/signin'},
    {tabLabel: 'Search',path: '/signin'},
];

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                {appTabList.map((tab, idx) => <AppBarTab key={idx} tabLabel={tab.tabLabel} path={tab.path} />)}
            </ScrollView>
        </View>
    );
};

export default AppBar;