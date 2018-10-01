import React from  'react';
import { authStatus, set2FAEnabled } from './graphql/dataQuery';
import { graphql, compose, ApolloConsumer, Mutation } from 'react-apollo';

class Auth extends React.Component {

    handleWithApolloClient = (client) => {        
        const { authentication, dummy } = client.readQuery({query: authStatus});
        client.writeQuery({
            query: authStatus,
            data: {
                authentication: {
                    ...authentication,
                    twofactorEnabled: !authentication.twofactorEnabled
                },
                dummy: !dummy
            }
        })
    }
    
    handleWithResolver = () => {
        const { authentication, dummy, set2FAEnabled_1 } = this.props;
        set2FAEnabled_1({
            variables: {
                twofactorEnabled: !authentication.twofactorEnabled,
                dummy: !dummy
            }
        });
    }

    handleWithMutationComponent = (set2FAEnabled_2) => {
        const { authentication, dummy } = this.props;
        set2FAEnabled_2({
            variables: {
                twofactorEnabled: !authentication.twofactorEnabled,
                dummy: !dummy
            }
        });
    }

    render() {
        const { userLoggedIn, twofactorEnabled } = this.props.authentication;
        const { dummy } = this.props;
        return (
            <div style={{margin:'10px'}}>
                <div>Am I a Dummy: {dummy ? "Yes" : "No"}</div>
                <hr />
                <div>User Logged in: {userLoggedIn ? "Yes" : "No"}</div>
                <div>2FA Enabled: {twofactorEnabled ? "Yes" : "No"}</div>
                <ApolloConsumer>
                {
                    (client) => (
                        <button
                            onClick={() => this.handleWithApolloClient(client)}
                            style={{fontSize: '14px', margin:'5px', backgroundColor:'#CCCCCC'}}>Direct Write with Apollo Client</button>
                    )
                }
                </ApolloConsumer>
                <button
                    onClick={() => this.handleWithResolver()}
                    style={{fontSize: '14px', margin:'5px', backgroundColor:'#CCCCCC'}}>Using Resolvers with mutation gql</button>
                <Mutation mutation={set2FAEnabled}>
                {
                    (set2FAEnabled_2) => (
                        <button
                            onClick={() => this.handleWithMutationComponent(set2FAEnabled_2)}
                            style={{fontSize: '14px', margin:'5px', backgroundColor:'#CCCCCC'}}>Using Mutation Component with mutation gql</button>
                    )
                }
                </Mutation>
            </div>
        )
    }
}

export default compose(
    graphql(authStatus, {
        props: ({data}) => ({
            authentication: data.authentication,
            dummy: data.dummy
        })
    }),
    // bind the mutation gql to the props with the name "fnSet2FAEnabled"
    graphql(set2FAEnabled, {
        name: "set2FAEnabled_1"
    }),
)
(Auth);