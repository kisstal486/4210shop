import React, { Component } from 'react';


class Content extends Component {
    constructor(){
        super();
        this.state = {
            name: this.props.name,
            category: this.props.category,
            product: this.props.product
        }
    }
    
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default Content;