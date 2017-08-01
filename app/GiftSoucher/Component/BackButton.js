import React, {Component} from 'react';

export default class BackButton extends Component {
    render() {
        return(
            <div className="row uniform" style={{'marginTop': '10px'}}>
                <div className="12u$ actions">
                    <button type="button" className="button special" onClick={this.props.previousPage}>
                        <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-left"/>
                        <span> Back </span>
                        <span  style={{'marginLeft' : '5px'}} className="icon fa-user "/>
                    </button>
                </div>
            </div>
        )
    }
}
