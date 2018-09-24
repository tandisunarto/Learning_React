import { gql } from 'apollo-boost';

export default gql`
    query {
        currentGame @client {
            teamAName
            teamBName 
        }
    }
`;