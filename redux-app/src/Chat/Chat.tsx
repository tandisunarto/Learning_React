import * as React from 'react';
import MessageView from './MessageView';
import MessageInput from './MessageInput';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ChatReducer } from './ChatReducer';

import { ACTIONS } from './ChatActionEnum';

const store = createStore(ChatReducer);

class Chat extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    submitHandler = (message: string) => {
        store.dispatch({
            type: ACTIONS.ADD_MESSAGE,
            message: message,
        });        
    }

    deleteHandler = (index: number) => {
        store.dispatch({
            type: ACTIONS.DELETE_MESSAGE,
            index: index,
        });
    }

    render() {        
        const messages = store.getState().messages;
        return (
            <Provider store={store}>
                <div className='ui segment'>
                    <MessageView delete={this.deleteHandler} messages={messages} />
                    <MessageInput submit={this.submitHandler} />
                </div>
            </Provider>
        );
    }
}

export default Chat;