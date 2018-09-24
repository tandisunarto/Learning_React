import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { gql } from 'graphql-tag';

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
    defaults: defaultState
})

const Client = new ApolloClient({
    link: ApolloLink.from([
        stateLink
    ]),
    cache
})



export default Client;