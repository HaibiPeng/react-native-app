import React from 'react';
import { Pressable, StyleSheet} from 'react-native';
import Theme from '../Theme';
import Text from './Text';

const styles=StyleSheet.create({
    defaultButton:{
        padding: 10,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultLabel:{
        fontSize: Theme.fontSizes.subheading,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Button = ({ label, ...props }) => {
    return (
        <Pressable style={{...styles.defaultButton, backgroundColor: props?.backgroundColor ? props.backgroundColor : Theme.colors.primary}} {...props}>
           <Text style={styles.defaultLabel}>{label}</Text> 
        </Pressable>
    );
};

export default Button;