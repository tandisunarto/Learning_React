class ProductList extends React.Component {
    render() {
        const products = Seed.products.sort((a,b) => (
            b.votes - a.votes
        ));

        const productComponent = Seed.products.map(
            (product) => (                
                <Product key={product.id} product={product} />
            )
        );

        console.log(productComponent);

        return (
            <div className='ui unstackable items'>
                {productComponent}
            </div>
        )
    }
}