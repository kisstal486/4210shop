import React, { Component } from 'react';
import ShoppingListCard from './shoppingListCards';
import products from '../Product/product';

class ShoppingList extends Component {


    render() { 
        return ( 
            <div className="shopping-list">
                <div className="shopping-list-wrapper">
                    <div className="shopping-list-header">
                        <div className="shopping-list-title">
                            <h2>Shopping List</h2><br></br>
                        </div>
                        <div className="shopping-list-table-header">
                            <h5 className="shopping-list-table-header-item">&emsp;Product<span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span></h5>
                            <h5 className="shopping-list-table-header-item">Price&emsp;&emsp;&emsp;</h5>
                            <h5 className="shopping-list-table-header-item">Quantity</h5><br/><br/><br/>
                        </div>
                    </div>
                    {
                        products.map((product, key) => {
                            return (
                                <ShoppingListCard 
                                category= {product.category}
                                product= {product.product}
                                id = {product.id}
                                img = {product.img}
                                price = {product.price}
                                quantity = "1" 
                                key = {key}/>
                            );
                        })
                    }
                    <div className="shopping-list-bottom">
                        <div className="shopping-list-bottom-item shopping-list-total">
                            <h4>Total: $103000</h4>
                        </div>
                        <div className="shopping-list-bottom-item shopping-list-checkout">
                            <button>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ShoppingList;