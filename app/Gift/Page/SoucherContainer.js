import React, {Component} from 'react';
import Soucher from '../Component/Soucher';
import BackButton from "../Component/BackButton";

export default class SoucherContainer extends Component {
    render() {
        const {formState, backButtonOnClick, cardShouldFlip} = this.props;

        return(
            <div className="6u 12u$(small) hide-mobile" style={{'width' : '500px'}}>
                <Soucher cardShouldFlip = {cardShouldFlip} formState = {formState} />
                <BackButton buttonText="Edit Contact" onClick = {backButtonOnClick} />
            </div>
        )
    }
}
