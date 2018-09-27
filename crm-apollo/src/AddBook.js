import React from 'react';
import addBook from './graphql/addBookQuery';
import { graphql, compose } from 'react-apollo';

class AddBook extends React.Component {

    handleAddBook = () => {
        this.props.addBook({
            variables: {
                title: "Shinning",
                author: "Stephen King",
                type: "Horror"
            }
        })
    }

    render() {
        return (
             <React.Fragment>
                 <button onClick={this.handleAddBook}>Add Book</button>
             </React.Fragment>
        )            
    }
}

export default compose(
    graphql(addBook, {
        name: "addBook"
    })
)(AddBook);