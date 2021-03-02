import React from 'react';
import { Component } from 'react';

import Header from './Frame/Header';
import Breadcrumb from './Frame/Breadcrumb.jsx';
import ContentHome from './Home/ContentHome';
import Footer from './Frame/Footer';
import CategoryList from './Frame/CategoryList';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Home",
            category: ""
        }
    }
    render() { 
        const {name} = this.state;
        const {category} = this.state;
        return ( 
            <div className="MainPage">
                <Header/>
                <div className="responsive-wrapper">
                    <Breadcrumb name = {name} category = {category}/>
                    <div className="content_category">
                        <div className="main-nav-item-web">
                            <CategoryList/>
                        </div>
                        <ContentHome name = {name} category = {category}/>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}
 
export default MainPage;