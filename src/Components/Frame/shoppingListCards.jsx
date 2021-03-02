import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ShoppingListCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: this.props.category,
            product: this.props.product,
            id: this.props.id,
            img: this.props.img,
            price: this.props.price,
            quantity: this.props.quantity
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
          this.setState({  
            category: this.props.category,
            product: this.props.product,
            id: this.props.id,
            img: this.props.img,
            price: this.props.price,
            quantity: this.props.quantity });
        }

        window.location.reload()
    }
        
    render() { 

        const {category} = this.state;
        const {id} = this.state;

        return ( 
            <div className="shopping-list-card">
                <div className="shopping-list-card-item">
                    <img className="shopping-list-card-img" src={this.state.img} alt={this.state.product}></img>
                </div>
                <div className="shopping-list-card-item shopping-list-card-product-name">
                    <Link to={`/category=${category}/product=${id}`} className="nav">
                        <h4>{this.state.product}</h4>
                    </Link>
                </div>
                <div className="shopping-list-card-item shopping-list-card-price">
                    <h4>{"$"+this.state.price}</h4>
                </div>
                <div className="shopping-list-card-item shopping-list-card-quantity">
                    <br></br>
                    <input type="text" name="input" className="quantity-input"></input>
                </div>
                <br></br><br></br><br></br>
            </div>

        );
    }
}
 
export default ShoppingListCard;