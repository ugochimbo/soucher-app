import React, {Component} from 'react';

export default class SwapItem extends Component {
     render() {

         let imgSrc = [
             'hm.png', 'catholic-match-gift-cards.png', 'amazon.jpeg', 'pizza_express.jpg',
             'x1.jpg', 'x2.jpg', 'x3.jpg', 'x5.jpg', 'x6.jpg', 'x7.jpg', 'x8.jpg', 'x9.jpg', 'x10.jpg',
             'x11.jpg', 'x12.jpg', 'x13.jpg', 'x15.jpg', 'x16.jpg', 'x17.jpg', 'x18.jpg', 'x18.jpg',
             'x19.jpg', 'x21.jpg', 'x22.jpg', 'x23.jpg', 'x24.jpg','x25.jpg', 'x26.jpg', 'x27.jpg',
             'x28.jpg', 'x29.jpg', 'x30.jpg','x31.jpg', 'x32.jpg', 'x33.jpg', 'x34.jpg'
         ];

        return (
            <div className="item">
                <div className="img">
                    <img src = {`/asset/image/voucher/${imgSrc[Math.floor(Math.random()*imgSrc.length)]}`}  />
                </div>
                <div className="amount">
                    <div className="fixed">
                        <div> &euro;10 </div>
                        <div> &euro;20 </div>
                        <div> &euro;50 </div>
                        <div> &euro;100 </div>
                    </div>
                    <div className="custom">
                        <input type="text" placeholder="Enter Custom Amount" />
                    </div>
                </div>
            </div>
        )
    }
}
