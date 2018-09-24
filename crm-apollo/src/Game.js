import React from 'react';

import { graphql, compose } from 'react-apollo';
import getCurrentGame from './graphql/getCurrentGame';

class Game extends React.Component {
    render() {
        const { currentGame } = this.props;
        return (             
            <React.Fragment>
                <div>
                    {currentGame.teamAName}
                </div>
                <div>
                    {currentGame.teamBName}
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
    })    
)(Game); 