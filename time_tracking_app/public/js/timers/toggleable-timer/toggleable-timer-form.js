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

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm />
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