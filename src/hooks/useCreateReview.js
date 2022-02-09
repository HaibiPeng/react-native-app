import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [CreateReview, data] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        // call the mutate function here with the right arguments
        let res = await CreateReview({ variables: { 
            review: { 
                ownerName, 
                repositoryName, 
                rating, 
                text
            }
        }});
        return res.data.createReview;
    };

    return [createReview, data];
};

export default useCreateReview;