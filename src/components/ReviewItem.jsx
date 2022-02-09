import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigate } from "react-router-native";
import { format } from 'date-fns';
import useDeleteReview from '../hooks/useDeleteReview';
import Button from './Button';
import Theme from '../Theme';
import Text from './Text';

const styles = StyleSheet.create({
	review: {
		display: 'flex',
		backgroundColor: 'white',
		padding: 10,
	},
	reviewInfo: {
		flexDirection: 'column',
		flexShrink: 1,
		paddingLeft: 15,
		paddingBottom: 10,
	},
	reviewDate: {
		color: Theme.colors.textSecondary,
		paddingTop: 5,
		paddingBottom: 5,
	},
	pointStyle: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: Theme.colors.primary,
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		flexShrink: 1,
	}
});

const ReviewItem = ({ item, isMyReview, refetch }) => {
	const navigate = useNavigate();
	const [deleteReview] = useDeleteReview();
    const date = new Date(item.createdAt)
	const formattedDate = format(date, "yyyy.MM.dd");

	const onPressDelete = (id) => {
		Alert.alert(
			"Delete review",
			"Are you sure want to delete this review?",
			[
				{ text: "CANCEL", style: "cancel" },
				{ 
					text: "DELETE", 
					onPress: async () => {
						await deleteReview(id);
						await refetch();
					}
				}
			]
		);
	}

	return (
		<View style={styles.review}>
			<View style={{ flexDirection: 'row' }}>
				<View style={styles.pointStyle}>
					<Text color={'primary'} fontWeight={'bold'}>
						{item.rating}
					</Text>
				</View>
				<View style={styles.reviewInfo}>
					<Text fontWeight={'bold'} fontSize={'subheading'}>
						{isMyReview ? item.repository.fullName : item.user.username}
					</Text>
					<Text style={styles.reviewDate}>{formattedDate}</Text>
					<Text>{item.text}</Text>
				</View>
			</View>
			{
				isMyReview ? 
				<View style={styles.buttonContainer}>
					<Button label='View repository' width={150} onPress={() => navigate(`/repositories/${item.repository.id}`, { replace: true })}/>
					<Button label='Delete review' width={150} backgroundColor={'red'} onPress={() => onPressDelete(item.id)}/>
				</View>
				:
				null
			}
			
		</View>
	);
};

export default ReviewItem;