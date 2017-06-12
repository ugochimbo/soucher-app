import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Voucher from '../Component/Voucher';
import Filter from '../../Common/Filter';

export default class GiftCardCatalogPage extends Component{
    render() {
        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <header className="major">
                        <h2>Voucher Catalog</h2>
                        <p>
                            Our catalog is updated regularly.
                        </p>
                    </header>
                    <Filter/>
                    <div className="catalog-light-content">
                        <div className="row uniform">
                            <div className="12u$">
                                <div id="swap-catalog">
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                    <Voucher />
                                </div>
                            </div>
                            <div className="12u$" style={{'marginTop': '20px', 'marginBottom': '20px'}}>
                                <ul className="actions align-center">
                                    <li>
                                        <Link to="/buy/card-details" className="button big special">
                                            <span> Page 1 of 1 </span>
                                            <span style={{'marginLeft': '10px'}} className="icon fa-arrow-circle-o-right"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
