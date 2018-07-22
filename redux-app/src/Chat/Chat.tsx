import * as React from 'react';
import MessageView from './MessageView';
import MessageInput from './MessageInput';

import { connect } from 'react-redux';
import { ACTIONS } from './ChatActionEnum';

interface IChatProps {
    messages: any,
    onAddMessage: any,
    onDeleteMessage: any
}

class Chat extends React.Component<IChatProps> {

    submitHandler = (message: string) => {
        this.props.onAddMessage(message);
    }

    deleteHandler = (index: number) => {
        this.props.onDeleteMessage(index);
    }

    render() {
        return (
            <div className='ui segment'>
                <MessageView delete={this.deleteHandler} messages={this.props.messages} />
                <MessageInput submit={this.submitHandler} />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        messages: state.messages
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddMessage: (message: string) => dispatch({
            type: ACTIONS.ADD_MESSAGE,
            message: message,
        }),
        onDeleteMessage: (index: number) => dispatch({
            type: ACTIONS.DELETE_MESSAGE,
            index: index,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);