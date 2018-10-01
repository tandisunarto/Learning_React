import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { authStatus } from './graphql/dataQuery';

const defaultState = {
    dummy: false,
    authentication: {
        __typename: "Authentication",
        userLoggedIn: false,
        twofactorEnabled: false
    }
}

const resolvers = {
    Mutation: {
        set2FAEnabled: (_, {twofactorEnabled, dummy}, {cache}) => {
            const data = { 
                authentication: {
                    __typename: "Authentication",
                    twofactorEnabled
                },
                dummy 
            };
            cache.writeData({data});
        }
    }
}

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache: cache,
    defaults: defaultState,
    resolvers: resolvers
})

const client = new ApolloClient({
    link: ApolloLink.from([        
        stateLink,
        new HttpLink({
            uri: "https://api.graph.cool/simple/v1/cjmi8a5rp3x3e0199kx613gm7",
        })
    ]),
    cache
})

export default client;