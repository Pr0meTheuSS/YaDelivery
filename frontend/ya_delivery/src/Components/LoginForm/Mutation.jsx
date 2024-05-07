import { gql } from 'apollo-boost';

export const loginUserMutation = gql`
    mutation Authenticate($email: String!, $password: String!) {
        authenticate(email: $email, password: $password) {
            token
        }
    }
`;