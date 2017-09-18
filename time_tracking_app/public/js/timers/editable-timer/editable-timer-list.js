class EditableTimerList extends React.Component {
    
    timers = this.props.timers;
    
    render() {
        const editableTimers = this.timers.map(
            (timer) => (
                <EditableTimer 
                    timer={timer} 
                    key={timer.id} />
            )
        )

        return (
            <div id="timers">
                {editableTimers}
            </div>
        )
    }
}