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
        this.updateTimer(data)
    }

    updateTimer = (data) => {
        this.setState({
            timers: this.state.timers.map(
                (timer) => {
                    if (timer.id === data.id) {
                        return Object.assign({}, timer, data.timer)
                    } else {
                        return timer;
                    }
                }
            )
        })
    }

    handleDeleteClick = (id) => {
        this.deleteTimer(id)
    }

    deleteTimer = (id) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== id)
        })
    }

    render() {        
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList 
                        onDeleteClick={this.handleDeleteClick}
                        onFormSubmit={this.handleEditFormSubmit}
                        timers={this.state.timers} />
                    <ToggleableTimerForm 
                        onFormSubmit={this.handleCreateFormSubmit}
                        isOpen={false} />
                </div>
            </div>
        )
    }
}