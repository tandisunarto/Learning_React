class TimersDashboard extends React.Component {

    state = {
        timers: TimerSeed
    }

    handleCreateFormSubmit = (data) => {
        this.createTimer(data.timer);
    }

    handleEditFormSubmit = (data) => {
        this.updateTimer(data)
    }

    handleDeleteClick = (id) => {
        this.deleteTimer(id)
    }

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    }

    createTimer = (timer) => {        
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        });
    };

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

    deleteTimer = (id) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== id)
        })
    }

    startTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(
                (timer) => {
                    if (timer.id === timerId) {
                        return Object.assign({},
                            timer,
                            {
                                runningSince: now
                            }
                        )
                    } else {
                        return timer;
                    }
                }
            )
        })
    }

    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(
                (timer) => {
                    if (timer.id === timerId) {
                        const lastElapsed = now - timer.runningSince;                        
                        return Object.assign({},
                            timer,
                            {
                                elapsed: timer.elapsed + lastElapsed,
                                runningSince: null,
                            }
                        )
                    } else {
                        return timer;
                    }
                }
            )
        })
    }

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList 
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
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