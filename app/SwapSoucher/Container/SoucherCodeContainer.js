import React, {Component} from 'react';
import ValidateSoucherForm from '../Component/ValidateSoucherForm';
import {connect} from 'react-redux';

class SoucherCodeContainer extends Component {
     render() {
        return (
            <div id="main">
                <ValidateSoucherForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(SoucherCodeContainer);
