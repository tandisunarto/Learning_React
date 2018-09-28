import React from 'react';
import { authStatus, allBooks } from './graphql/dataQuery';
import { comboData } from './graphql/dataQuery';
import { Query } from 'react-apollo';

class AuthStatusQuery extends React.Component {

    render() {

        const auth = (
            <Query query={authStatus}>
            {
                ({loading, error, data}) => {
                    if (loading) return "Loading";
                    if (error) return `Error: ${error}`;
                    const auth = data.authentication;
                    return (
                        <div>
                            <span><strong>Using Query Component</strong></span>
                            <div>{`Logged In: ${auth.userLoggedIn}`}</div>
                            <div>{`2FA enabled: ${auth.twofactorEnabled}`}</div>
                            <hr />
                        </div>
                    )
                }
            }
            </Query>
        )

        const combo = (
            <Query query={comboData}>
            {
                ({loading, error, data}) => {
                    if (loading) return "Loading";
                    if (error) return `Error: ${error}`;

                    const { authentication, allBookses } = data;

                    const books = (
                        allBookses.map((book, idx) => {
                            return <div key={idx}>{book.title} by {book.author}</div>
                        })
                    )

                    console.log(data);
                    return (
                        <div>
                            <span><strong>Using Query Component with combo query (local and remote)</strong></span>
                            <div>User Logged In: {authentication.userLoggedIn ? "Yes" : "No"}</div>
                            {books}
                            <hr />
                        </div>
                    )
                }
            }
            </Query>
        )

        return (
            <React.Fragment>
                {auth}
                {combo}
            </React.Fragment>
        )
    }
}

export default AuthStatusQuery;