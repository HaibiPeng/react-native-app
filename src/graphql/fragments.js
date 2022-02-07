import { gql } from '@apollo/client';

export const RepositoryList = gql`
	fragment CoreNodeFields on Repository {
		id
		fullName
		description
		language
		forksCount
		stargazersCount
		ratingAverage
		reviewCount
		ownerAvatarUrl
	}
`;