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

const getAllBooks = gql`
    query {
        allBookses {
            id
            title
            author
        }
    }
`;

export {
    getCurrentGame,
    getAuthentication,
    getAllBooks
}