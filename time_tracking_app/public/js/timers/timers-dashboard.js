class TimersDashboard extends React.Component {

    state = {
        timers: TimerSeed
    }

    handleCreateFormSubmit = (data) => {
        this.createTimer(data.timer);
    }

    createTimer = (timer) => {        
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        });
    };

    handleEditFormSubmit = (data) => {
        this.createTimer(data.timer);
    }

    render() {        
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList 
                        timers={this.state.timers} />
                    <ToggleableTimerForm 
                        onFormSubmit={this.handleCreateFormSubmit}
                        isOpen={false} />
                </div>
            </div>
        )
    }
}