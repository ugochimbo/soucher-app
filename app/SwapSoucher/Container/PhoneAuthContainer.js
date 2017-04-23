import React, {Component} from 'react';
import PhoneAuth from '../Component/PhoneAuth';
import {connect} from 'react-redux';

class PhoneAuthContainer extends Component {
     render() {
        return (
            <div id="main">
                <PhoneAuth />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(PhoneAuthContainer);
