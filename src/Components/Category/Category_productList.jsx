import React, { Component } from 'react';
import ProductCard from './Category_productCard';
import products from '../Product/product';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            category: this.props.category,
        }
    }

    render() { 
        const {category} = this.state;
        return ( 
            <div className="product-list">
                <div className="product-list-wrapper">
                    {
                        products.map((product, key) => {
                            return (
                                <ProductCard key={key} category={category} image={product.img} name={product.product} id={product.id} price={product.price} />
                            );
                        })
                    }
                  
                </div>
                
            </div>
         );
    }
}
 
export default ProductList;