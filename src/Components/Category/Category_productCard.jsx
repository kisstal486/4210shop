import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: this.props.image,
            name: this.props.name,
            price: this.props.price,
            category: this.props.category,
            id: this.props.id
        }
    }
    render() { 
        const {category} = this.state;
        const {id} = this.state;
        return ( 
                <div className="productCard-product-thumbnail">
                    <Link to={`/category=${category}/product=${id}`}>
                    <div className="productCard-row">
                        <div>
                            <img className="productCard-product-image" src={this.state.image} alt={this.state.props}></img>
                        </div>
                    </div>
                    </Link>
                    <div className="productCard-row">
                    <Link to={`/category=${category}/product=${id}`} className="nav">
                        <div className="productCard-product-name">
                            <h4>{this.state.name}</h4>
                        </div>
                    </Link>
                    </div>
                    <div className="productCard-row productCard-row-cart">
                        <div className="productCard-product-price">
                            <h4>{"$" + this.state.price}</h4>
                        </div>
        
                        <div className="productCard-cart-button">
                            <button className="addToCart-button" title="Add to Cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div> 
                </div>
        );
    }
}
 
export default ProductCard;