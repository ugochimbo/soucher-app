import React, {Component} from 'react';
import SwapCatalog from '../Component/SwapCatalog';
import {connect} from 'react-redux';

class SwapSoucherContainer extends Component{
     render() {
        return (
            <div id="main-full" className="full">
                <SwapCatalog />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(SwapSoucherContainer);
