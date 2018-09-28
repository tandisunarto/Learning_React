import { gql } from 'apollo-boost';

// queries for local data
const authStatus = gql`
    query {
        authentication @client {
            userLoggedIn
            twofactorEnabled
        }
    }
`;

// queries for remote data
const allBooks = gql`
    query {
        allBookses {
            id
            title
            author
        }
    }
`;


const comboData = gql`
    query {
        authentication @client {
            userLoggedIn
            twofactorEnabled
        }
        allBookses {
            id
            title
            author
        }
    }
`;

export {
    authStatus,
    allBooks,
    comboData
}