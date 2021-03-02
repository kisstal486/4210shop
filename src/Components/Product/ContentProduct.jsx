import React, { Component } from 'react';

class ContentProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Product",
            category: this.props.category,
            id: this.props.id,
            product: this.props.product,
            img: this.props.img,
            price: this.props.price
        }
    }
    render() { 
        return ( 
            <div className="body content-wrapper">
                <div className="product-intro-card">
                    <div className="product-intro-card-img"> 
                        <img src={this.state.img} alt={this.state.product}></img>
                    </div>
                    <div className="product-intro-card-description">
                        <h1 className="product-intro-card-description-item">{this.state.product}</h1>
                        <h4 className="product-intro-card-description-item grey-words capitalize">{this.state.category}</h4>
                        <br/>
                        <h4 className="product-intro-card-description-item"> {"$"+this.state.price} 
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button className="addToCart-button" title="Add to Cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </h4>
                        <br/><br/>
                        <h5 className="grey-words product-intro-card-description-item">Description</h5>
                        <h5 className="product-intro-card-description-item">
                          This is a leng leng dress~*  
                        </h5>
                    </div>
                </div>
            </div>
           
         );
    }
}
 
export default ContentProduct;