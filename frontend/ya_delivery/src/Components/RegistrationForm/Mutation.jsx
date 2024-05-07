import { gql } from 'apollo-boost';

export const registerUserMutation = gql`
    mutation registerUser($input: RegistrationRequest!) {
        register(input: $input) {
            status
        }
    }
`;