import React from 'react';
import { View } from 'react-native';
import { useNavigate } from "react-router-native";
import { useApolloClient } from '@apollo/client';
import Button from './Button';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const onLogOut = async ()=>{
        try {
            await authStorage.removeAccessToken();
            await apolloClient.resetStore();
            navigate("/", { replace: true });
        } catch (e) {
            console.log(e.message);
        }
    };

    return <Button label='Sign out' onPress={onLogOut}/>;
};

export default SignOut;