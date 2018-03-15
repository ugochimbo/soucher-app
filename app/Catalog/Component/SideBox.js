import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as LINK_TO from '../../config/constant';
import FilterBar from "../../Filter/FilterBar";

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
                <div id="basket" className="1u 12u$(small) catalog" style={{'position' : 'fixed'}}>

                    <span className="desktop-side-box">
                        <div>Have a Soucher to redeem ?</div>
                        <div>Let's get started.</div>

                        <button type="button" className="button special" onClick={() => redirectToRedeem()}>
                            <span> To Redeem </span>
                            <span  style={{'marginLeft' : '1px'}} className="icon fa-arrow-circle-o-right"/>
                        </button>
                    </span>

                    <span className="mobile-side-box">
                        <nav className='mobile'>
                            <a href="#mobile-filter"><i className="fa fa-sliders">
                                <span style={{'marginLeft': '2px'}}>Filter</span> </i></a>
                        </nav>

                        <nav id="mobile-filter">
                            <div className="inner">
                                <FilterBar filterHandler = {this.props.filterHandler} searchHandler = {this.props.searchHandler} />
                            </div>
                        </nav>
                    </span>
                </div>
            </div>
        )
    }
}

export default withRouter(SideBox);
