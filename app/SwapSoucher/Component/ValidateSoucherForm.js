import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ValidateSoucherForm extends Component {
     render() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Please enter your soucher code</h2>
                    <p>
                        You will need your phone for final verification of the swap.
                    </p>
                </header>
                <div className="light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="6u 12u$(small) align-center">
                                <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '20px'}} />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3>Enter Soucher Code</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="soucher-code" id="soucher-code" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <p>Your code can be found in the bottom center as seen in the sample image</p>
                                </div>
                                <div className="12u$">
                                    <ul className="actions">
                                        <li>
                                            <Link to="/swap/catalog" className="button big special">
                                                <span> Start my swap </span>
                                                <span  style={{'marginLeft' : '5px'}} className="icon fa-arrow-circle-o-right"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
}
