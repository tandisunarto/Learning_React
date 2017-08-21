class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                Hello I am a basic React Component
            </div>
        )
    }
}

ReactDOM.render(<ProductList />, document.getElementById('content'));