import React from 'react';

const TestLabel = (props) => {
    return React.createElement(
        'span', 
        { id : "City", className: "Blue-Font"}
        , "Washington DC")
}

class LoginForm extends React.Component {
    state = {
        fields: {
            userid: ''
        },
        fieldErrors: ''
    }

    onInputChange = (e) => {    
        
        const val = e.target.value;        

        this.setState(
            (prevState, props) => {
                return {
                    fields: {
                        userid : val
                    }
                }                
            },
            () => {
                this.validate();
            }
        )        
    }

    validate() {
        if (this.state.fields.userid.length > 0 && this.state.fields.userid.length < 4) {
            this.setState({                
                fieldErrors: 'userid must be longer than 4'
            })
        } else {
            this.setState({
                fieldErrors: ''
            })
        }
    }

    render() {
        return (
            <div>
                <div className="Red-Font">
                    Userid: 
                    <input type="text" value={this.state.fields.userid} onChange={this.onInputChange}></input>
                </div>
                <span style={{color: 'red'}}>{this.state.fieldErrors}</span>
            </div>
        )
    }
}

export {
    TestLabel,
    LoginForm
};