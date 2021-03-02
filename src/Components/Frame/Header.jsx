import React from 'react';
import { Link } from "react-router-dom";
import { Component } from 'react';
import ShoppingList from './shoppingList';
import CategoryList from './CategoryList';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            category: this.props.category,
            product: this.props.product,
            id: this.props.id,
            img: this.props.img,
            price: this.props.price,
            quantity: this.props.quantity
        }
    }

    render() { 

        const {name} = this.state;
        const {category} = this.state;
        const {id} = this.state;
        const {product} = this.state;
        const {img} = this.state;
        const {price} = this.state;

        return ( 
            <header className="header"> 
                <div className="header-logo-image"> 
                    <img src="" alt=""></img>
                </div>
                <div className="header-nav">
                    <nav className="main-nav">
                    <input className="menu-btn main-nav-item-responsive" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                    <ul className="menu main-nav-item-responsive">
                        <li>
                            <Link to="/" className="main-nav-item "><h3>Home</h3></Link>
                        </li>
                        <li>
                        <Link to="/contactus"  className="main-nav-item" ><h3>Contact Us</h3></Link>
                        </li>
                        <li>
                                <div className="dropdown-shopping-list">
                                    <Link to="/" className="dropdown-shopping-list-btn main-nav-item"> 
                                        <h3 className="main-nav-item">Shopping List</h3>
                                    </Link>
                                    <div className="dropdown-content" >
                                        <ShoppingList price={price} img={img} product= {product} name = {name} category = {category} id={id}/>
                                    </div>
                                </div>
                        </li>
                        <li>
                            <CategoryList/>
                        </li>
                    </ul>
                        <ul className="main-nav-item-web">
                            <li>
                                <Link to="/"  className="main-nav-item ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16" >
                                        <path className=" main-nav-item-web"  d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                    </svg> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactus"  className="main-nav-item" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path className=" main-nav-item-web" fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <div className="dropdown-shopping-list">
                                    <Link to="/" className="dropdown-shopping-list-btn main-nav-item"> 
                                        <h5 className="main-nav-item main-nav-item-web">Shopping List</h5>
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-fill main-nav-item" viewBox="0 0 16 16">
                                            <path className=" main-nav-item-web" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                    </Link>
                                    <div className="dropdown-content main-nav-item-web" >
                                        <ShoppingList price={price} img={img} product= {product} name = {name} category = {category} id={id}/>
                                    </div>
                                </div>

                            </li>
                        </ul>
                       
                    </nav>
                </div>
                   
            </header>
        );
    }
}
 
export default Header;