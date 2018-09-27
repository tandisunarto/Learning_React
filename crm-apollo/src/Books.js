import React from 'react';
import { Query } from 'react-apollo';
import { getAllBooks, getBooksByType } from './graphql/booksQuery';

const Books = () => (
    <Query query={getAllBooks}>
    {
        ({loading, error, data}) => {
            if (loading) { return "loading...!"};
            if (error) { return `error: ${error}`};

            const { allBookses } = data;

            return (
                allBookses.map((book, idx) => {
                    return <h3 key={idx}>{book.title} ({book.type})...... by <i>{book.author}</i></h3>
                })
            )
        }
    }
    </Query>
)

const BooksByType = ({type}) => (
    <Query 
        query={getBooksByType}
        variables={{type}}>
    {
        ({loading, error, data}) => {
            if (loading) { return "loading...!"};
            if (error) { return `error: ${error}`};

            const { allBookses } = data;

            return (
                allBookses.map((book, idx) => {
                    return <h3 key={idx}>{book.title} ... by <i>{book.author}</i></h3>
                })
            )
        }
    }
    </Query>
)

export {
    Books,
    BooksByType
}