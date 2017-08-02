import React, {Component} from 'react';

class Front extends Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <img src="/asset/image/card-template.png" width="100%"/>
                    </div>
                </div>
            </div>
        )
    }
}

class Back extends Component {
    render() {
        const {message} = this.props;

        return(
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>A note for you:</h1>
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        )
    }
}

export default class Soucher extends Component {
    render() {
        const {formState, cardShouldFlip} = this.props;

        const flip = cardShouldFlip ? 'flip' : '';

        return(
            <div className={'card-container ' + flip}>
                <div className='card-body'>
                    <Front />
                    <Back message = {formState.values.soucherMessage}/>
                </div>
            </div>
        )
    }
}
