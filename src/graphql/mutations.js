import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation SignIn($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
            id
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation DeleteReview($id: ID!) {
        deleteReview(id: $id)
    }
`;

export const SIGN_UP = gql`
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            username
        }
    }
`;