import { gql } from '@apollo/client';

export const CORE_REPOSITORY_FIELDS = gql`
	fragment CoreRepositoryFields on Repository {
		id
		fullName
		description
		language
		forksCount
		stargazersCount
		ratingAverage
		reviewCount
		ownerAvatarUrl
		url
	}
`;

export const CORE_REVIEW_FIELDS = gql`
	fragment CoreReviewFields on Review {
		id
		text
		rating
		createdAt
		repositoryId
		user {
			id
			username
		}
	}
`;