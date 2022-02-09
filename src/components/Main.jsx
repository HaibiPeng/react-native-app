import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Routes, Route } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';
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
                <Route path="/" exact element={<RepositoryList />} />
                <Route path="/signin" exact element={<SignIn />} />
                <Route path="/signout" exact element={<SignOut />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/repositories/:id" exact element={<SingleRepository />} />
                <Route path="/myreviews" exact element={<MyReviews />} />
                <Route path="/createreview" exact element={<CreateReview />} />
            </Routes>
        </View>
    );
};

export default Main;