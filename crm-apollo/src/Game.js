import React from 'react';

import { graphql, compose, Query } from 'react-apollo';
import { getCurrentGame, getAuthentication, getAllBooks } from './graphql/query';
import updateTwofactorEnabled from './graphql/mutations';

import { AllBooks, AllBooks2 } from './AllBooks';

import { Books, BooksByType } from './Books';

class Game extends React.Component {

    handleUpdateAuth = () => {
        let updateAuth = this.props.updateTwofactorEnabled;
        let enabled = this.props.authentication.twofactorEnabled;
        updateAuth({
            variables: {
                enableTwofactor: !enabled
            }
        });
    }

    render() {

        const { currentGame, authentication, allBookses, updateTwofactorEnabled} = this.props;

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
    graphql(updateTwofactorEnabled, { 
        name: 'updateTwofactorEnabled'
    })
)(Game); 