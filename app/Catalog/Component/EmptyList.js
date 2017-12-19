import React, {Component} from 'react';

export default class EmptyList extends Component {

    render () {
        return (
            <div style={{"minHeight" : "300px"}} >
                <span style={{"color" : "#011A27"}} className="icon fa-2x fa-exclamation-circle"/>
                <span style={{"marginLeft" : "5px"}}>Sorry, no gift card was found matching your given criteria.</span>
            </div>
        )
    }
}