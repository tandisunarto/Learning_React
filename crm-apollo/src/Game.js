import React from 'react';

import { graphql, compose, ApolloConsumer } from 'react-apollo';
import { getCurrentGame, getAuthentication, getAllBooks, getBooksByType } from './graphql/query';
import updateTwofactorEnabled from './graphql/mutations';

import { AllBooks, AllBooks2 } from './AllBooks';

import { Books, BooksByType } from './Books';

import MyBooksByType from './BooksByType';

class Game extends React.Component {

    state = {
        books: []
    }

    handleUpdateAuth = () => {
        let updateAuth = this.props.updateTwofactorEnabled;
        let enabled = this.props.authentication.twofactorEnabled;
        updateAuth({
            variables: {
                enableTwofactor: !enabled
            }
        });
    }

    handleGetBooks = async (client) => {
        const { data } = await client.query({
            query: getBooksByType,
            variables: {
                type: "Scifi"
            }
        })

        this.setState({
            books: data.allBookses
        })
    }

    render() {

        const { currentGame, authentication, allBookses, updateTwofactorEnabled} = this.props;

        const { books } = this.state;

        return (
            <React.Fragment>
                {/*****************************************************************************************/}
                {/* method 1 - import gql to game component and then pass it into the books compoents     */}
                {/*****************************************************************************************/}
                {/* <AllBooks query={getAllBooks}>
                {
                    (data) => {
                        const { allBookses } = data;
                        return allBookses.map((book, idx) => {
                            return (
                                <h3 key={idx}>{book.title} by <i>{book.author}</i></h3>
                            )
                        })
                    }
                }
                </AllBooks>
                <AllBooks2 query={getAllBooks} /> */}

                {/*****************************************************************************************/}
                {/* method 2 - import gql directly inside book component                                  */}
                {/*****************************************************************************************/}
                {/* <Books />
                <BooksByType type="Programming"/> */}

                <ApolloConsumer>
                {
                    client => (
                        <div>
                            <MyBooksByType books={books} />
                            <button onClick={() => this.handleGetBooks(client)}>Get Books</button>
                        </div>
                    )
                }
                </ApolloConsumer>
                <div>
                    {currentGame.teamAName}
                </div>
                <div>
                    {currentGame.teamBName}
                </div>
                <div>
                    two-factor enabled: {authentication.twofactorEnabled ? "Yes" : "No"}
                </div>

                <button onClick={this.handleUpdateAuth}>Toggle Auth (handle)</button>
                <button onClick={() => updateTwofactorEnabled({
                    variables: {
                        enableTwofactor: !authentication.twofactorEnabled
                    }
                })}>Toggle Auth (inline)</button>
            </React.Fragment>
        )
    }
}

export default compose(
    // hooking up the local data to props 
    graphql(getCurrentGame, {
        props: ({data:{currentGame}}) => ({
            currentGame
        }) 
    }),
    graphql(getAuthentication, {
        props: ({data:{authentication}}) => ({
            authentication
        })
    }),
    // hooking up the remote data to props 
    graphql(getAllBooks, {
        props: ({data}) => ({
            books: data.allBookses
        })
    }),
    // mutating local data
    graphql(updateTwofactorEnabled, { 
        name: 'updateTwofactorEnabled'
    })
)(Game); 