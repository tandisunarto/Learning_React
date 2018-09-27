import React from 'react'

const MyBooksByType = (props) => {

    const books = props.books.map((book, idx) => {
        return <h3 key={idx}>Title: {book.title} - Author: {book.author} </h3>
    });

    return (
        <React.Fragment>
            {books}
        </React.Fragment>
    )
}

export default MyBooksByType;