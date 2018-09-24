import { ApolloClient, gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';

const defaultState = {
    currentGame: {
        __typename: "CurrentGame",
        teamAScore: 0,
        teamBScore: 0,
        teamAName: "Liverpool",
        teamBName: "Chelsea"
    },
    authentication: {
        __typename: "Authentication",
        twofactorEnabled: false
    }
};

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache,
    defaults: defaultState,
    resolvers: {
        Mutation: {
            updateTwofactorEnabled: (_, {enableTwofactor}, {cache}) => {

                const query = gql`
                    query {
                    authentication @client {
                        __typename
                        twofactorEnabled
                    }
                }`

                const prevState = cache.readQuery({query});

                const data = {
                    ...prevState,
                    authentication: {
                        ...prevState.authentication, 
                        twofactorEnabled: enableTwofactor
                    }
                }
                
                cache.writeData({
                    query,
                    data
                })
            }
        }
    }
})

const Client = new ApolloClient({
    link: ApolloLink.from([
        stateLink
    ]),
    cache
})



export default Client;