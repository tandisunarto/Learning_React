class Product extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <div className='item'>
                <div className='image'>
                    <img src={product.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a><i className='large caret up icon' /></a>
                        {product.votes}
                    </div>
                    <div className='description'>
                        <a href={product.url}>{product.title}</a>
                        <p>{product.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img src={product.submitterAvatarUrl} className='ui avatar image' />
                    </div>
                </div>
            </div>
        );
    }
}