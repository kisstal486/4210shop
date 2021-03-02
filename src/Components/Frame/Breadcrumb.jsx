import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import products from '../Product/product';

class Breadcrumb extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            category: this.props.category,
            id: this.props.id,
            product: ""
        }
    }

    componentWillMount(){
        this.getProductName();
    }

    getProductName(){
        products.forEach((product, i) => {
            if(product.id === this.state.id){
                var productName = product.product;
                this.setState({product: productName});
            }
        })

        
    }
    

    render() { 

        if (this.state.name === "Home"){
            return ( 
                <div className="breadcrumb">
                    <Link to = "/" className="breadcrumb-link  nav">Home</Link>
                </div>
            );
        } else if (this.state.name === "Category"){
            const {category} = this.state;
            return (
                    <div className="breadcrumb">
                        <Link to = "/" className="breadcrumb-link  nav">Home</Link>
                        <span> &gt; </span>
                        <Link to = {`/category=${category}`} className=" nav breadcrumb-link capitalize">{this.state.category}</Link>   
                    </div>
                
            );
        }else if (this.state.name === "Product"){
            const {category} = this.state;
            const {id} = this.state;
            return(
                <div className="breadcrumb"> 
                    <Link to = "/" className="breadcrumb-link  nav">Home</Link>
                    <span> &gt; </span>
                    <Link to = {`/category=${category}`} className=" nav breadcrumb-link capitalize">{this.state.category}</Link>  
                    <span> &gt; </span>
                    <Link to = {`/category=${category}/product=${id}`} className=" nav breadcrumb-link capitalize">{this.state.product}</Link>
                </div>
            );
        }
    }
    
}
 
export default Breadcrumb;