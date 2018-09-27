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

const getBooksByType = gql`
    query ($type:String!) {
        allBookses(filter:{type:$type}) {
            id
            title
            author
        }
    }
`;

export {
    getCurrentGame,
    getAuthentication,
    getAllBooks,
    getBooksByType
}