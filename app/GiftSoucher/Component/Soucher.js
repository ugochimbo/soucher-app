import React, {Component} from 'react';
import PreforatedImage from "./PreforatedImage";
import MessageImage from "./MessageImage";

class Front extends Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <PreforatedImage formState = {this.props.formState.values} />
                    </div>
                </div>
            </div>
        )
    }
}

class Back extends Component {
    render() {
        const {formState} = this.props;

        return(
            <div className='card-side side-back'>
                <div className='container-fluid'>
                        <MessageImage formState = {formState.values} />
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
                    <Front formState = {formState} />
                    <Back formState = {formState} />
                </div>
            </div>
        )
    }
}
