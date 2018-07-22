import * as React from 'react';

import { connect } from 'react-redux'

const chatfooter = (props: any) => {
    return (
        <footer>
            Total Messages: {props.messages.length}
        </footer>
    )
}

const mapStateToProps = (state: any) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps) (chatfooter)
