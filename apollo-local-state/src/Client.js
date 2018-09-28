import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';

const defaultState = {
    authentication: {
        __typename: "Authentication",
        userLoggedIn: false,
        twofactorEnabled: false
    }
}

const resolvers = {
    
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