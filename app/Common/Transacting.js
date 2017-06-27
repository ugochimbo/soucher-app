import React, {Component} from 'react';
import { FoldingCube } from 'better-react-spinkit';
import Modal from 'react-modal';

export default class Transacting extends Component {
    render() {
        let style = {
            overlay: {
                backgroundImage: 'url("/asset/image/overlay_2.png")}',
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.75)',
                backgroundPosition: 'initial',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                padding: '10px',
                zIndex: '10000'
            },
            content: {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                border: '1px solid #ccc',
                background: '#011A27',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                color: '#BCC3C9'
            }
        };

        return (
            <Modal isOpen={true} contentLabel = {'Finalizing Transactions'} style = {style}>
                <div style={{
                    'color': '#BCC3C9',
                    'borderRadius': '1em',
                    'padding': '1em',
                    'position': 'absolute',
                    'top': '50%',
                    'left': '50%',
                    'marginRight': '-50%',
                    'transform': 'translate(-50%, -50%)'
                }}>
                    <FoldingCube size={120} timingFunction={'ease-in-out'} color='#BCC3C9' />
                    <h3 className="highlight" style={{'marginTop' : '20px'}}>
                        ...Finalizing <br/>
                        Transaction...
                    </h3>
                </div>
                <h3 className="highlight" style={{'marginTop' : '20px'}}>
                    ...Finalizing <br/>
                    Transaction...
                </h3>
            </Modal>
        );
    }
}