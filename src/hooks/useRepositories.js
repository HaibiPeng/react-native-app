import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries';

const sortingStrategies = {
    latest_repositories: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highest_rated_repositories: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowest_rated_repositories: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
};

const useRepositories = ({ first, sortingStrategy, searchKeyword }) => {
    const variables = { first, ...sortingStrategies[sortingStrategy], searchKeyword };
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return { repositories: data?.repositories, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;