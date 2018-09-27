import { ApolloClient, gql, HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';

const defaultState = {
    currentGame: {
        __typename: "CurrentGame",
        teamAScore: 0,
        teamBScore: 0,
        teamAName: "Home",
        teamBName: "Visitor"
    },
    authentication: {
        __typename: "Authentication",
        twofactorEnabled: false,
        roles: ["admin","guest"]
    }
};

const resolvers = {
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

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache,
    defaults: defaultState,
    resolvers: resolvers
})

const Client = new ApolloClient({
    link: ApolloLink.from([
        stateLink,
        new HttpLink({
            //uri: "https://api-useast.graphcms.com/v1/cjm6qmvew02p601c4jqk7dtmy/master",
            uri: "https://api.graph.cool/simple/v1/cjmi8a5rp3x3e0199kx613gm7"
        })
    ]),
    cache
})

export default Client;