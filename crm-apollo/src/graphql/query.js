import { gql } from 'apollo-boost';

const getCurrentGame = gql`
    query {
        currentGame @client {
            teamAName
            teamBName 
        }
    }
`;

const getAuthentication = gql`
    query {
        authentication @client {
            twofactorEnabled
        }
    }
`;


export {
    getCurrentGame,
    getAuthentication
}