import { gql } from 'apollo-boost';

export const loginUserMutation = gql`
    mutation login($input: LoginRequest!) {
        login(input: $input) {
            token
        }
    }
`;