import React, {Component} from 'react';
import Filter from '../Component/Filter';
import Listing from '../Component/Listing';
import Basket from '../Component/Basket';

export default class SwapCatalog extends Component {
     render() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Select Voucher(s)</h2>
                    <p>
                        Please select one or more vouchers
                    </p>
                </header>
                <Filter/>
                <div className="catalog-light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <Listing />
                            <Basket />
                        </div>
                    </form>

                </div>
            </section>
        )
    }
}
