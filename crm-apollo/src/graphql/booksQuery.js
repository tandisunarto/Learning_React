import { gql } from 'apollo-boost';

const getAllBooks = gql`
    query {
        allBookses {
            id
            title
            author
            type
        }
    }
`;

const getBooksByType = gql`
    query getBooksByType($type:String!) {
        allBookses(filter:{type:$type}) {
            id
            title
            author
        }
    }
`;

export {
    getAllBooks,
    getBooksByType
}