import { gql } from 'apollo-boost';

// queries for local data
const authStatus = gql`
    query {
        authentication @client {
            userLoggedIn
            twofactorEnabled
        },
        dummy
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

const addBook = gql`
    mutation($title:String!, $author:String!, $type:String!) {
        createBooks(title:$title, author:$author, type:$type) {
            id
            title
            author
            type
        }
    }
`;

const set2FAEnabled = gql`
    mutation Set2FAEnabled($twofactorEnabled: Boolean!, $dummy: Boolean!) {        
        set2FAEnabled(twofactorEnabled: $twofactorEnabled, dummy: $dummy) @client
    },
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
    comboData,
    addBook,
    set2FAEnabled
}