import React from 'react';

import { graphql, compose } from 'react-apollo';
import { getCurrentGame, getAuthentication } from './graphql/query';

class Game extends React.Component {
    render() {
        const { currentGame, authentication } = this.props;
        console.log(currentGame, authentication);
        return (             
            <React.Fragment>
                <div>
                    {currentGame.teamAName}
                </div>
                <div>
                    {currentGame.teamBName}
                </div>
                <div>
                    two-factor enabled: {authentication.twofactorEnabled ? "Yes" : "No"}
                </div>
            </React.Fragment>
        )
    }
}

export default compose(
    graphql(getCurrentGame, {
        props: ({data:{currentGame}}) => ({
            currentGame
        })
    }),
    graphql(getAuthentication, {
        props: ({data:{authentication}}) => ({
            authentication
        })
    }),
)(Game); 