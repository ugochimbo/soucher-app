import React, {Component} from 'react';
import Soucher from '../Component/Soucher';
import BackButton from "../Component/BackButton";

export default class SoucherContainer extends Component {
    render() {
        const {backButtonOnClick} = this.props;

        return(
            <div className="6u 12u$(small)" style={{'width' : '500px'}}>
                <Soucher />
                <BackButton onClick = {backButtonOnClick}/>
            </div>
        )
    }
}
