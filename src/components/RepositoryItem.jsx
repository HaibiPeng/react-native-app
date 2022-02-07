import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from './Text';
// import Constants from 'expo-constants';
import Theme from '../Theme';
import dataFormatter from '../utils/dataFormatter';

const styles = StyleSheet.create({
    container0: {
        backgroundColor: Theme.colors.RepositoryItemBackgroundColor,
        display: 'flex',
        padding: 10,
    },
    container1: {
        display: 'flex',
        flexDirection: 'row',
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10,
    },
    container3: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 5,
    },
    container4: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: 'gray',
        padding: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 8,
        padding: 10,
    },
});

const RepositoryItem = ({ item, index }) => {
    return (
        <View key={index} style={styles.container0} testID="repositoryItem">
            <View style={styles.container1}>
                <Image 
                    style={styles.avatar}
                    source={{
                        uri: item.ownerAvatarUrl,
                    }}
                />
                <View style={styles.container2}>
                    <Text fontWeight="bold" fontSize="subheading" style={{ padding: 5 }}>{item.fullName}</Text>
                    <Text color="textSecondary" style={{ padding: 5 }}>{item.description}</Text>
                    <View style={{ margin: 5, alignSelf: 'left', backgroundColor: Theme.colors.primary, borderRadius: 8,}}>
                        <Text color="white" fontWeight="bold" fontSize="subheading" style={{ padding: 5 }}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container3} testID="repositoryItemData">
                <View style={styles.container4}>
                    <Text fontWeight="bold" style={{ padding: 5 }}>{dataFormatter(item.stargazersCount)}</Text>
                    <Text color="textSecondary" style={{ padding: 5 }}>Stars</Text>
                </View>
                <View style={styles.container4}>
                    <Text fontWeight="bold" style={{ padding: 5 }}>{dataFormatter(item.forksCount)}</Text>
                    <Text color="textSecondary" style={{ padding: 5 }}>Forks</Text>
                </View>
                <View style={styles.container4}>
                    <Text fontWeight="bold" style={{ padding: 5 }}>{item.reviewCount}</Text>
                    <Text color="textSecondary" style={{ padding: 5 }}>Reviews</Text>
                </View>
                <View style={styles.container4}>
                    <Text fontWeight="bold" style={{ padding: 5 }}>{item.ratingAverage}</Text>
                    <Text color="textSecondary" style={{ padding: 5 }}>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;