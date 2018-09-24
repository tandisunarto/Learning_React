import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const POST_QUERY = gql`
{
    posts {
        id
        title
        body
    }
}
`;


class Posts extends React.Component {
    render() {
        return (
            <React.Fragment>
            </React.Fragment>            
        )
    }
}

export default Posts;