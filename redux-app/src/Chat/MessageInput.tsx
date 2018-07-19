import * as React from 'react';

interface IMessageInputProps {
    submit: any,
}

class MessageInput extends React.Component<IMessageInputProps> {
    state = {
        value: '',
    };

    onChange = (e: any) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleSubmit = () => {
        this.props.submit(this.state.value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div className='ui input'>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'/>
                <button
                    onClick={this.handleSubmit}
                    className='ui primary button'
                    type='submit'>
                    Submit
                </button>
            </div>
        );
    }
}

export default MessageInput;