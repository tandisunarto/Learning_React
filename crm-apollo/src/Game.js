import React from 'react';

import { graphql, compose } from 'react-apollo';
import { getCurrentGame, getAuthentication } from './graphql/query';
import updateTwofactorEnabled from './graphql/mutations';

class Game extends React.Component {

    render() {

        const { currentGame, authentication, updateTwofactorEnabled} = this.props;        
        console.log(this.props);
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
                <button onClick={() => updateTwofactorEnabled({
                    variables: {
                        enableTwofactor: !authentication.twofactorEnabled
                    }
                })}>Toggle Authentication</button>
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
    graphql(updateTwofactorEnabled, { 
        name: 'updateTwofactorEnabled'
    })
)(Game); 