import React, { Component } from 'react';

import Header from './Frame/Header';
import Breadcrumb from './Frame/Breadcrumb.jsx';
import ContentCategory from './Category/ContentCategory';
import CategoryList from'./Frame/CategoryList';
import Footer from './Frame/Footer';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Category",
            category: this.props.match.params.cat
        }
    }
    
    render() { 
        
        const {name} = this.state;
        const {category} = this.state;

        return ( 
            <div className="Category">
                <Header/>
                <div className="responsive-wrapper">
                    <Breadcrumb name = {name} category = {category} />
                    <div className="content_category">
                        <div className="main-nav-item-web">
                            <CategoryList/>
                        </div>
                        <ContentCategory name = {name} category = {category}/>
                    </div>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Category;