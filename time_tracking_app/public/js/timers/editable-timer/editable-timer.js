class EditableTimer extends React.Component {

    state = {
        editFormOpen: false,
    }

    closeForm = () => {
        this.setState({
            editFormOpen: false
        })
    }

    openForm = () => {
        this.setState({
            editFormOpen: true
        })
    }

    handleFormClose = () => {
        this.closeForm();
    }

    handleFormUpdate = (timer) => {
        this.closeForm();
        this.props.onFormSubmit(timer);
    }

    handleEditClick = () => {
        this.openForm();
    }

    render() {
        const timer = this.props.timer;
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormUpdate}
                    onFormClose={this.handleFormClose}
                    timer={timer} />
            )
        } else {
            return (
                <Timer
                    onDeleteClick={this.props.onDeleteClick}
                    onEditClick={this.handleEditClick}
                    timer={timer} />
            )
        }
    }
}

class TimerForm extends React.Component {

    state = {
        id: this.props.timer == null ? null : this.props.timer.id,
        timer: {
            title: this.props.timer == null ? '' : this.props.timer.title || '',
            project: this.props.timer == null ? '' : this.props.timer.project || '',            
        }        
    }

    handleTitleChange = (e) => {
        this.setState({            
            timer: {
                title: e.target.value,
                project: this.state.timer.project,
            }
        })
    }

    handleProjectChange = (e) => {
        this.setState({
            timer: {
                title: this.state.timer.title,
                project: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        this.props.onFormSubmit({
            id: this.state.id,
            timer: this.state.timer
        });
    }

    handleFormClose = (e) => {
        this.props.onFormClose();
    }

    render() {
        var timer = this.state.timer;
        const submitText = this.state.id ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' value={timer.title}
                                onChange={this.handleTitleChange} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text' value={timer.project}
                                onChange={this.handleProjectChange} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'
                                onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <button className='ui basic red button'
                                onClick={this.handleFormClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Timer extends React.Component {

    handleDeleteClick = () => {
        this.props.onDeleteClick(this.props.timer.id);
    }

    render() {
        var timer = this.props.timer;
        const elapsedString = helpers.renderElapsedString(timer.elapsed);
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {timer.title}
                    </div>
                    <div className='meta'>
                        {timer.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'
                            onClick={this.props.onEditClick}>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'
                            onClick={this.handleDeleteClick}>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
            </div>
        );
    }
}