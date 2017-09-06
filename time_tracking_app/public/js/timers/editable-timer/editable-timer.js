class TimerForm extends React.Component {
    render() {
        const timer = this.props.timer;
        console.log(timer);
        const submitText = (timer !== 'undefined' && timer.title) ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' defaultValue={timer.title} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text' defaultValue={timer.project} />
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
        console.log(this.props)
        return (
            <div>Timer</div>
        )
    }
}

class EditableTimer extends React.Component {    
        
    render() {
        const timer = this.props.timers;

        if (timer.editFormOpen) {
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