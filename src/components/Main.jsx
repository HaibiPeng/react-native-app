import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Routes, Route } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import Theme from '../Theme';

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        backgroundColor: Theme.colors.mainBackgroundColor,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/signin" exact element={<SignIn />} />
                <Route path="/" element={<RepositoryList />} />
            </Routes>
        </View>
    );
};

export default Main;