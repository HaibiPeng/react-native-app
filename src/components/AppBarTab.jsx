import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Theme from '../Theme';

const styles = StyleSheet.create({
    text: {
        padding: 10,
        color: Theme.colors.tabTextColor,
        fontWeight: 'bold',
        fontSize: Theme.fontSizes.tab,
    }
});

const AppBarTab = ({ tabLabel, path }) => {
    return (
        // <Pressable onPress={() => onPressFunction(pressable)}>
        //     <Link to={path}>
        //         <Text style={styles.text}>{tabLabel}</Text>
        //     </Link>
        // </Pressable>
        <Link to={path}>
            <Text style={styles.text}>{tabLabel}</Text>
        </Link>
    );
};

export default AppBarTab;