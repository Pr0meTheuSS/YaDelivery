import { gql } from 'apollo-boost';

export const registerUserMutation = gql`
    mutation registerUser($username: String!, $email: String!, $password: String!) {
        registerUser(username: $username, email: $email, password: $password) {
            token
        }
    }
`;