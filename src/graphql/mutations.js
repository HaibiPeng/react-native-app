import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation SignIn($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

// export const createUser = gql`
//     mutation {
//         createUser(user: { username: "myusername", password: "mypassword" }) {
//             id
//             username
//         }
//     }
// `;