class ToggleableTimerForm extends React.Component {

    state = {
        isOpen: false
    }
    
    // ** if not using arrow function, we must bind the function to the component in the constructor
    // constructor(props) {
    //     super(props)
    //     this.handleOpenForm = this.handleOpenForm.bind(this);
    // }
    //
    // handleOpenForm() {
    //     this.setState({
    //         isOpen: true
    //     })
    // }

    handleOpenForm = () => {
        this.setState({
            isOpen: true
        })
    }

    handleFormClose = () => {
        this.setState({
            isOpen: false
        })
    }

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer)
        this.setState({
            isOpen: false
        })
    }

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose} />
            )
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon' 
                        onClick={this.handleOpenForm} >
                        <i className='plus icon' />
                    </button>
                </div>
            )
        }
    }
}