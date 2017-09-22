class EditableTimerList extends React.Component {

    render() {
        const timers = this.props.timers;

        const editableTimers = timers.map(
            (timer) => (
                <EditableTimer 
                    onFormSubmit={this.props.onFormSubmit}
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