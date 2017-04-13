import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Basket extends Component {
     render() {
        return (
            <div className="2u 12u$(small)">
                <div id="basket">
                    <section>
                        <header>Basket</header>
                    </section>
                    <section>
                        Soucher Value: 50 &euro; <br/>
                        In Use: 40 &euro; <br/>
                        Balance: 10 &euro; <br/>
                        -------------------- <br />
                        Amazon 10 &euro; <br />
                        H&M 20 &euro; <br />
                        Ebay 10 &euro; <br /><br />

                    </section>
                    <section>
                        <Link to="/swap/phone-auth" className="button big special">
                            <span>Swap</span>
                            <span style={{'marginLeft': '10px'}} className="icon fa-arrow-circle-o-right"/>
                        </Link>
                    </section>
                </div>
            </div>
        )
    }
}
