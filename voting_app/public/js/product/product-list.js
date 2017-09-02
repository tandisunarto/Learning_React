class ProductList extends React.Component {

    handleProductUpVote = (productId) => {
        const updatedProducts = this.state.products.map(
            (product) => {
                if (product.id === productId) {
                    return Object.assign(
                        {},
                        product, 
                        {
                            votes: product.votes + 1
                        }
                    )
                } else {
                    return product;
                }
            }
        );
        
        this.setState({
            products: updatedProducts,
        });
    };

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }

        // this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }

    componentDidMount() {
        this.setState({
            products: Seed.products
        })
    }

    render() {
        const products = this.state.products.sort((a,b) => (
            b.votes - a.votes
        ));

        const productComponent = this.state.products.map(
            (product) => (
                <Product 
                    onUpVote={this.handleProductUpVote}
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