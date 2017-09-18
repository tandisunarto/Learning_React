class EditableTimer extends React.Component {

    state = {
        editFormOpen: true,
    }

    render() {
        const timer = this.props.timer;
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    timer={timer} />
            )
        } else {
            return (
                <Timer
                    timer={timer} />
            )
        }

    }
}

class TimerForm extends React.Component {

    state = {
        timer: {
            title: this.props.timer == null ? '' : this.props.timer.title || '',
            project: this.props.timer == null ? '' : this.props.timer.project || '',            
        }        
    }

    handleTitleChange = (e) => {
        this.setState({
            timer = {
                title = e.target.value
            }
        })
    }

    handleProjectChange = (e) => {
        this.setState({
            timer = {
                Project = e.target.value
            }
        })
    }

    render() {
        var timer = this.state.timer;
        const submitText = timer.title ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' value={timer.title}
                                onChange={handleTitleChange} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text' value={timer.project}
                                onChange={handleProjectChange} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'>
                                {submitText}
                            </button>
                            <button className='ui basic red button'>
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
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
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