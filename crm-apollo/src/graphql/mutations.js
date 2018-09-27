import { gql } from 'apollo-boost';

export default gql`
    mutation ($enableTwofactor: Boolean!) {
        updateTwofactorEnabled(enableTwofactor : $enableTwofactor) @client {
            twofactorEnabled
        }
    }
`;
