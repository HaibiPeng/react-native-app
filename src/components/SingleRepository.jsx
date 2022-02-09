import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useParams } from "react-router-native";
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
// import useReviews from '../hooks/useReviews';
import useRepository from '../hooks/useRepository';
import ItemSeparator from './ItemSeparator';

const SingleRepository = () => {
    const { id } = useParams();
    const { repository, fetchMore } = useRepository({ id, first: 3 });
    const reviewNodes = repository
		? repository.reviews.edges.map((edge) => edge.node)
		: [];

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem item={item} isMyReview={false}/>}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.2}
            ListHeaderComponent={repository && (
                <>
                    <RepositoryItem item={repository} git={true} />
                    <ItemSeparator />
                </>
            )}
        />
    );
}

export default SingleRepository;