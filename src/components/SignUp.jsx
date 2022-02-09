import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import useSignUp from '../hooks/useSignUp';

export const SignUpContainer = ({ signUp, navigate }) => {
    const [error, setError] = useState('');

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(1, 'Username must be at least 1 characters long')
            .max(30, 'Username must be no longer than 30 characters')
            .required('Username is required'),
        password: yup
            .string()
            .min(5, 'Password must be at least 5 characters long')
            .max(15, 'Username must be no longer than 15 characters')
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref('password'), null], "Passwords don't match")
            .required('Password confirm is required')
    });

    const initialValues={
            username:'',
            password:'',
            passwordConfirmation: '',
    };

    const onSubmit = async (values)=>{
        const { username, password } = values;
        try {
            await signUp({ username, password });
            navigate("/signin", { replace: true });
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
                        <FormikTextInput secureTextEntry={true} name='password' placeholder='Password' error={''} setError={setError} />
                        <FormikTextInput secureTextEntry={true} name='passwordConfirmation' placeholder='Password confirmation' error={error} setError={setError} />
                        <Button label='Sign up' onPress={handleSubmit}/>
                    </View>}             
            </Formik>  
        </View>
    );
}

const SignUp = () => {
    const [signUp] = useSignUp();
    const navigate = useNavigate();

    return <SignUpContainer signUp={signUp} navigate={navigate} />;
};

export default SignUp;