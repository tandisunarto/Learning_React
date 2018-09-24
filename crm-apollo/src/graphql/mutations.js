import { gql } from 'apollo-boost';

export default gql`
    mutation updateTwofactorEnabled($enableTwofactor: Boolean!) {
        updateTwofactorEnabled(enableTwofactor : $enableTwofactor) @client {
            twofactorEnabled
        }
    }
`;
