import { gql } from "@apollo/client";

export const loginMutation = gql`
    mutation($input: UsersPermissionsLoginInput!) {
        login(input: $input) {
        jwt
        user {
            username
            email
        }
        }
    }
`;