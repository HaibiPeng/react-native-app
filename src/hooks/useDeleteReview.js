import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [DeleteReview, data] = useMutation(DELETE_REVIEW);

    const deleteReview = async (id) => {
        // call the mutate function here with the right arguments
        let res = await DeleteReview({ variables: {
            id
        }});
        return res.data.deleteReview;
    };

    return [deleteReview, data];
};

export default useDeleteReview;