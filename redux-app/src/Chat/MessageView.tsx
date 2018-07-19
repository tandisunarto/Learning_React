import * as React from 'react';

export interface IMessageViewProps {
    messages: any,
    delete: any
}

export interface IAppState {
}

class MessageView extends React.Component<IMessageViewProps, IAppState> {

    handleClick = (index: any) => {
        this.props.delete(index);
    };

    componentDidMount() {
    }

    render() {
        const messages = this.props.messages.map((message: any, index: any) => (
            <div
                className='comment'
                key={index}
                onClick={() => this.handleClick(index)}>
                {message}
            </div>
        ));
        return (
            <div className='ui center aligned basic segment'>
                <div className='ui comments'>
                    {messages}
                </div>
            </div>
        );
    }
}

export default MessageView;