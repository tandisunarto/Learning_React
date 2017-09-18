class TimersDashboard extends React.Component {

    state = {
        timers: TimerSeed
    }

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList timers={this.state.timers} />
                    <ToggleableTimerForm isOpen={false} />
                </div>
            </div>
        )
    }
}