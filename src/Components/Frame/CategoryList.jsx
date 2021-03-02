import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Category",
            category: ""
        }
    }
    setDress(){
        this.setState({category : "Dress"});
    }

    render() { 
        return ( 
                <div className="list-of-categories">
                    <div> 
                        <h4>Categories...</h4>
                        <br/><br/>
                    </div>
                    <Link className="list-of-categories-item nav" to ="/category=dress">Dress</Link>
                </div>
           
        );
    }
}
 
export default CategoryList;