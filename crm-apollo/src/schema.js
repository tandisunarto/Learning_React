export const typeDefs = `

    type Contact {
        id: ID!,
        firstname: String,
        lastname: String
    }

    type Query {
        contacts: [Contact]
    }
`;