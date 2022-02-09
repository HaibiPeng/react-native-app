import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../Theme';
import AppBarTab from './AppBarTab';
import useMe  from "../hooks/useMe";

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

const AppBar = () => {
    const { me } = useMe();

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab tabLabel='Repositories' path='/' />
                {me ? 
                    <AppBarTab tabLabel='Create a review' path='/createreview' />
                    :
                    <AppBarTab tabLabel='Sign in' path='/signin' />
                }
                {me ? 
                    <AppBarTab tabLabel='My reviews' path='/myreviews' />
                    :
                    null
                }
                {me ? 
                    <AppBarTab tabLabel='Sign out' path='/signout' />
                    :
                    <AppBarTab tabLabel='Sign up' path='/signup' />
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;