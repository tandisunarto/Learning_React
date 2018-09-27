import React from 'react';
import { Query } from 'react-apollo';

const AllBooks = ({children, ...props}) => (
    <Query {...props}>
    {
        ({loading, error, data}) => {
            if (loading) { return "loading...!"};
            if (error) { return `error: ${error}`};

            return children(data);
        }
    }
    </Query>
)


const AllBooks2 = ({children, ...props}) => (
    <Query {...props}>
    {
        ({loading, error, data}) => {
            if (loading) { return "loading...!"};
            if (error) { return `error: ${error}`};

            const { allBookses } = data;
            return allBookses.map((book, idx) => {
                return <h3 key={idx}>{book.title} by <i>{book.author}</i></h3>
            })
            
        }
    }
    </Query>
)

export {
    AllBooks,
    AllBooks2
}