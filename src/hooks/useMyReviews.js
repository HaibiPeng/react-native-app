import { useQuery } from "@apollo/client"; 
import { ME } from "../graphql/queries";

const useMyReviews = (variables) => {  
    const { data, loading, fetchMore, refetch, ...result } = useQuery(ME, {
        variables,
        fetchPolicy: 'cache-and-network'
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {reviews: data && data?.me.reviews, loading, fetchMore: handleFetchMore, refetch, ...result};
};

export default useMyReviews;