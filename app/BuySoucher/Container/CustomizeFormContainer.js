import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomizationForm from '../Component/CustomizationForm';

class CustomizeFormContainer extends Component{
     render() {
        return (
            <div id="main">
                <CustomizationForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(CustomizeFormContainer);
