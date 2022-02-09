import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS, CORE_REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
	query getRepositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
		repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
			totalCount
			edges {
				node {
					...CoreRepositoryFields
				}
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
	${CORE_REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY = gql`
	query getRepository($id: ID!, $first: Int, $after: String) {
		repository(id: $id) {
	  		...CoreRepositoryFields
			reviews(first: $first, after: $after) {
				edges {
					node {
						...CoreReviewFields
					}
					cursor
				}
				pageInfo {
					endCursor
					startCursor
					hasNextPage
				}
			}
		}
	}
	${CORE_REPOSITORY_FIELDS}
	${CORE_REVIEW_FIELDS}
`;

export const ME = gql`
	query getCurrentUser($includeReviews: Boolean = false, $first: Int, $after: String){
		me {
			id
			username
			reviews(first: $first, after: $after) @include(if: $includeReviews) {
				edges {
					node {
						...CoreReviewFields
						repository {
							...CoreRepositoryFields
						}
					}
					cursor
				}
				pageInfo {
					endCursor
					startCursor
					hasNextPage
				}
			}
		}
	}
	${CORE_REPOSITORY_FIELDS}
	${CORE_REVIEW_FIELDS}
`;

// other queries...