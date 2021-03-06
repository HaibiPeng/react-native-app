import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import Text from './Text';
import Theme from '../Theme';
import useSignIn from '../hooks/useSignIn';

export const SignInContainer = ({ signIn, navigate }) => {
    const [error, setError] = useState('');

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(2, 'Username must be at least 2 characters long')
            .required('Username is required'),
        password: yup
            .string()
            .min(5, 'Password must be at least 5 characters long')
            .required('Password is required'),
    });

    const initialValues={
            username:'',
            password:''
    };

    const onSubmit = async (values)=>{
        const { username, password } = values;
        try {
            await signIn({ username, password });
            navigate("/", { replace: true });
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    };

    return (
        <View>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    {({handleSubmit})=>
                    <View>
                        <FormikTextInput name='username' placeholder='Username' error={''} setError={setError} />
                        <FormikTextInput secureTextEntry={true} name='password' placeholder='Password' error={error} setError={setError} />
                        <Button label='Sign in' onPress={handleSubmit}/>
                    </View>}             
            </Formik>  
        </View>
    );
}

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    return <SignInContainer signIn={signIn} navigate={navigate} />;
};

export default SignIn;