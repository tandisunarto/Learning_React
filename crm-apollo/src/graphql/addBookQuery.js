import { gql } from 'apollo-boost';

const addBook = gql`
    mutation  ($title: String!
        $author: String!
        $type: String!
    ) {
    createBooks(
        title:$title
        author:$author
        type:$type) {
        id
        title
        author
    }}
`;

export default addBook;