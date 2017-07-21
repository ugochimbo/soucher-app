import React, {Component} from 'react';

export default class GiftCardImage extends Component {
     render() {
        return (
            <div className="img">
                <img src = {`/asset/image/voucher/${this.props.name}`}  />
            </div>
        )
    }
}
