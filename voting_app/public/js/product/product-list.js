class ProductList extends React.Component {
    handleProductUpVote = (productId) => {
        console.log(productId + ' was upvoted');
    };

    render() {
        const products = Seed.products.sort((a,b) => (
            b.votes - a.votes
        ));

        const productComponent = Seed.products.map(
            (product) => (                
                <Product 
                    onVote={this.handleProductUpVote}
                    key={product.id} 
                    product={product} />
            )
        );

        return (
            <div className='ui unstackable items'>
                {productComponent}
            </div>
        )
    }
}