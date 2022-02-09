import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import useCreateReview from '../hooks/useCreateReview';
import useMe  from "../hooks/useMe";

export const CreateReviewContainer = ({ createReview, navigate }) => {
    const [error, setError] = useState('');

    const validationSchema = yup.object().shape({
        ownerName: yup
            .string()
            .required('Repository owner name is required'),
        repositoryName: yup
            .string()
            .required('Repository name is required'),
        rating: yup
            .number()
            .integer('Rating must be an integer number between 0 and 100')
            .min(0, 'Rating must be a positive number')
            .max(100, 'Rating must be less than 100')
            .required('Rating is required'),
    });

    const initialValues={
            repoOwnerName: '', 
            repoName: '', 
            rating: '', 
            review: ''
    };

    const onSubmit = async (values)=>{
        const rating = parseInt(values.rating);
        const { ownerName, repositoryName, text } = values;

        try {
            let review = await createReview({ ownerName, repositoryName, rating, text });
            let id = review.repositoryId;
            navigate(`/repositories/${id}`, { replace: true });
        } catch (e) {
            setError(e.message);
            console.log(e.message);
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
                        <FormikTextInput name='ownerName' placeholder='Repository owner name' error={''} setError={setError} />
                        <FormikTextInput name='repositoryName' placeholder='Repository name' error={''} setError={setError} />
                        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' error={''} setError={setError} />
                        <FormikTextInput name='text' placeholder='Review' multiline={true} error={error} setError={setError} />
                        <Button label='Create a review' onPress={handleSubmit} />
                    </View>}             
            </Formik>  
        </View>
    );
}

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const navigate = useNavigate();
    const { me } = useMe();

    return <CreateReviewContainer createReview={createReview} navigate={navigate} />;
};

export default CreateReview;