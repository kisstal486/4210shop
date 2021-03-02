import React, { Component } from 'react';
import ProductList from './Category_productList';

class Content_Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Category",
            category: this.props.category
        }
    }

    render() { 
        const {name} = this.state;
        const {category} = this.state;
        return ( 
            <div className="body content-wrapper">
                <div className="category-productList">
                    <ProductList name = {name} category = {category}/>
                </div>
            </div>
         );
    }
}
 
export default Content_Category;