import React, { Component } from 'react';

import Header from './Frame/Header';
import Breadcrumb from './Frame/Breadcrumb.jsx';
import CategoryList from'./Frame/CategoryList';
import ContentProduct from './Product/ContentProduct';
import Footer from './Frame/Footer';
import products from './Product/product';

class Product extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: "Product",
            category: this.props.match.params.cat,
            id: this.props.match.params.id,
            product: "",
            img: "",
            price: ""
        }
    }

    componentWillMount(){

        this.getProductName();
        this.getProductImg();
        this.getProductPrice();

    }

    getProductName(){
        products.forEach((product, i) => {
            if(product.id === this.props.match.params.id){
                var productName = product.product;
                this.setState({product: productName});
            }
        })
    }

    getProductImg(){
        products.forEach((product, i) => {
            if(product.id === this.state.id){
                var productImg = product.img;
                this.setState({img: productImg});
            }
        })
    }

    getProductPrice(){
        products.forEach((product, i) => {
            if(product.id === this.state.id){
                var productPrice = product.price;
                this.setState({price: productPrice});
            }
        })
    }

    render() { 

        const {name} = this.state;
        const {category} = this.state;
        const {id} = this.state;
        const {product} = this.state;
        const {img} = this.state;
        const {price} = this.state;
        return ( 
            <div className="Product">
                <Header price={price} img={img} product= {product} name = {name} category = {category} id={id}/>
                <div className="responsive-wrapper">
                    <Breadcrumb name = {name} category = {category} id = {id}/>
                    <div className="content_category">
                        <div className="main-nav-item-web">
                            <CategoryList/>
                        </div>
                        <ContentProduct price={price} img={img} product= {product} name = {name} category = {category} id={id}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default Product;