import React, {Component} from 'react';

export default class EmptyList extends Component {

    render () {
        return (
            <div style={{"marginBottom" : "20px"}} >
                <span style={{"color" : "#011A27"}} className="icon fa-2x fa-exclamation-circle"/>
                Sorry, no gift cards was found for matching your given criteria.
            </div>
        )
    }
}