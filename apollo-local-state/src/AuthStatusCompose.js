import React from 'react';
import { compose, graphql } from 'react-apollo';
import { authStatus, allBooks } from './graphql/dataQuery';
import { comboData } from './graphql/dataQuery';

class AuthStatusCompose extends React.Component {
    render() {
        
        const { auth, allBookses } = this.props;
        const books = (allBookses !== undefined) ? 
        (            
            allBookses.map((book, idx) => {
                return (
                    <div key={idx}>{book.title} by {book.author}</div>
                )
            })            
        ) : 
        (
            <div>none</div>
        );

        return (
            <React.Fragment>
                <span><strong>Using compose function</strong></span>
                <div>{`Logged In: ${auth.userLoggedIn}`}</div>
                <div>{`2FA enabled: ${auth.twofactorEnabled}`}</div>
                <hr />
                {books}
                <hr />
            </React.Fragment>
        )
    }
}

export default compose(
    graphql(authStatus, {
        props: ({data}) => ({
            auth: data.authentication
        }),
    }),
    graphql(allBooks, {
        props: ({data}) => ({
            allBookses: data.allBookses,
        })
    }),
    graphql(comboData, {
        props: ({data}) => ({
            auth2: data.authentication,
            allBooks2: data.allBookses
        })
    })
)(AuthStatusCompose);