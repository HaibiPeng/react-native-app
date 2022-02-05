import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Button from './Button';

const validationSchema =yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .required('Username is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),
});

const initialValues={
        username:'',
        password:''
};

const onSubmit=(values)=>{
    console.log('submit',values);
};

const SignIn = () => {
    return (
        <View>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                    {({handleSubmit})=>
                    <View>
                        <FormikTextInput name='username' placeholder='Username' />
                        <FormikTextInput secureTextEntry={true} name='password' placeholder='Password' />
                        <Button label='Sign in' onPress={handleSubmit}/>
                    </View>}             
            </Formik>  
        </View>
    );
};

export default SignIn;