import React, { Component } from 'react';

class Content_Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    render() { 
        return ( 
            <div className="body content-wrapper">

            </div>
         );
    }
}
 
export default Content_Home;