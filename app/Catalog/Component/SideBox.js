import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import * as LINK_TO from '../../config/constant';

class SideBox extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        let redirectToRedeem = () => {
            this.props.history.push(LINK_TO.SWAP_SOUCHER_ROUTE);
        };

        return (
            <div className="row uniform" style={{"marginTop" : "5px"}}>
                <div id="basket"
                     style={{"position" : "fixed", "backgroundColor" : "#011A27", "color" : "#fff", "marginTop" : "20px", "marginBottom" : "20px"}}
                     className="1u 12u$(small)">

                    <div>Have a Soucher to redeem ?</div>
                    <div>Let's get started.</div>

                    <button type="button" className="button big special" onClick={() => redirectToRedeem()} style={{"marginTop" : "20px", "marginBottom" : "20px"}}>
                        <span> Redeem </span>
                        <span  style={{'marginLeft' : '1px'}} className="icon fa-arrow-circle-o-right"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(SideBox);
