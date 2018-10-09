import React from 'react';

import { authStatus } from './graphql/dataQuery';
import { graphql } from 'react-apollo';

class AuthInject extends React.Component {
    
    render() {

        const { authentication } = this.props.data;

        return (
            <React.Fragment>
                <div>User Logged in: {authentication.userLoggedIn ? "Yes" : "No"}</div>
                <div>2FA Enabled: {authentication.twofactorEnabled ? "Yes" : "No"}</div>
            </React.Fragment>
        )
    }
}

export default graphql(authStatus)(AuthInject);