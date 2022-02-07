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

// const onPressFunction = (pressable) => {
//     if (pressable) {
//         Alert.alert('You pressed the text!');   
//     }
//     console.log('You pressed the text!');
// };

const AppBar = () => {
    const { me } = useMe();

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab tabLabel='Repositories' path='/' />
                {me ? 
                    <View>
                        <AppBarTab tabLabel='Sign out' path='/signout' />
                    </View>
                    :
                    <View>
                        <AppBarTab tabLabel='Sign in' path='/signin' />
                    </View>
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;