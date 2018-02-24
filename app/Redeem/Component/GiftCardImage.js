import React, {Component} from 'react';
import {STATIC_ASSET} from "../../config/constant";

export default class GiftCardImage extends Component {
     render() {
        return (
            <div className="img">
                <img src ={`${STATIC_ASSET}/voucher/${this.props.name}`} />
            </div>
        )
    }
}
