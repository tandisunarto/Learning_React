import React from 'react';
import { Mutation } from 'react-apollo';
import { addBook } from './graphql/dataQuery';

class AddBook extends React.Component {

    state = {
        title: "",
        author: "",
        type: ""
    }

    handleSubmit = async (e, createBooks) => {
        e.preventDefault();
        await createBooks({
            variables: {
                title: this.state.title,
                author: this.state.author,
                type: this.state.type,
            }
        })
        console.log("Create Book Completed");
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })        
    }

    render() {
        return (  
            <React.Fragment> 
                <Mutation mutation={addBook}>
                {
                    (x) => (
                        <form className="App">
                            <div>
                                <label>Title:</label>
                                <input id="title" type="text" name="title" onBlur={this.handleChange} />
                            </div>
                            <div>
                                <label>Author:</label>
                                <input id="author" type="text" name="author" onBlur={this.handleChange} />
                            </div>
                            <div>
                                <label>Type:</label>
                                <input id="type" type="text" name="type" onBlur={this.handleChange} />
                            </div>
                            <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e, x)} />
                        </form>
                    )
                }
                </Mutation>
            </React.Fragment>
        )
    }
}

export default AddBook;