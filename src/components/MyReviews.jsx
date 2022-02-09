import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import useMyReviews from '../hooks/useMyReviews';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const MyReviews = () => {
    const { reviews, fetchMore, refetch } = useMyReviews({includeReviews: true, first: 3});
    const reviewNodes = reviews
		? reviews.edges.map((edge) => edge.node)
		: [];
    const hasReview = reviewNodes.length !== 0;

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <View style={styles.container}>
            {
                hasReview ?
                <FlatList
                    data={reviewNodes}
                    renderItem={({ item }) => <ReviewItem item={item} isMyReview={true} refetch={refetch} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={ItemSeparator}
                    onEndReached={onEndReach}
                    onEndReachedThreshold={0.2}
                />
                :
                <Text fontSize='subheading' fontWeight='bold'>You have no reviews</Text>
            }
        </View>
    );
}

export default MyReviews;