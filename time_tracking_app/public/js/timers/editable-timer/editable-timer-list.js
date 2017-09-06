class EditableTimerList extends React.Component {
    render() {
        const timers = TimerSeed;

        const editableTimers = timers.map(
            (timer) => (
                <EditableTimer 
                    timers={timer} 
                    key={timer.title + timer.project} />
            )
        )

        return (
            <div id="timers">
                {editableTimers}
            </div>
        )
    }
}