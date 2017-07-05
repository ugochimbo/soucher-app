import React, {Component} from 'react';
import {connect} from 'react-redux';
import SectionHeader, {ContactUsPageHeader as header} from '../../Common/SectionHeader';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import * as Currency from '../../Util/Currency';
import * as Action from '../../SwapSoucher/action';

class GiftCardCatalogPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catalog: []
        };
    }

    componentWillMount() {
        this.props.dispatch(Action.fetchCatalog())
            .then((response) => {
                this.setState({
                    catalog: response.payload.data.gift_cards
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render () {
        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <SectionHeader title = {header.title} message = {header.message}/>
                    <Filter />
                    <div className="catalog-light-content">
                        <div className="row uniform">
                            <Listing catalog = {this.state.catalog} currency = {Currency.htmlEntityFor('EUR')} />;
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect()(GiftCardCatalogPage);
