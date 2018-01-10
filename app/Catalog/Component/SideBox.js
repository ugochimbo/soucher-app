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
                <div id="basket" className="1u 12u$(small) catalog">

                    <span className="desktop-side-box">
                        <div>Have a Soucher to redeem ?</div>
                        <div>Let's get started.</div>

                        <button type="button" className="button special" onClick={() => redirectToRedeem()}>
                            <span> To Redeem </span>
                            <span  style={{'marginLeft' : '1px'}} className="icon fa-arrow-circle-o-right"/>
                        </button>
                    </span>

                    <span className="mobile-side-box">
                        <button type="button" className="button big special" onClick={() => redirectToRedeem()}>
                            <span> To Redeem </span>
                            <span  style={{'marginLeft' : '1px'}} className="icon fa-arrow-circle-o-right"/>
                        </button>
                    </span>

                </div>
            </div>
        )
    }
}

export default withRouter(SideBox);
