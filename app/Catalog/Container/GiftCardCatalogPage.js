import React, {Component} from 'react';
import {connect} from 'react-redux';
import SectionHeader, {CatalogPageHeader as header} from '../../Common/SectionHeader';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import Paginator from '../../Common/Paginator';
import * as Currency from '../../Util/Currency';
import * as Action from '../../SwapSoucher/action';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

class GiftCardCatalogPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catalog: [],
            pagination: {},
            loading: false,
            category: '',
            action: ''
        };
    }

    componentWillMount() {
        this.fetchCatalog();
    };

    fetchCatalog(page = 1, category = '') {

        this.setState({
            loading: true
        });

        this.props.dispatch(Action.fetchCatalog(page, category))
            .then((response) => {
                const {gift_cards, pagination, status} = response.payload.data;

                if (status === SUCCESS_RESPONSE_CODE) {
                    this.setState({
                        catalog: ::this.updateCatalog(gift_cards, category),
                        pagination: pagination,
                        loading: false,
                        category: category,
                        action: 'filter'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    updateCatalog(gift_cards, category) {
        if (category === this.state.category) {
            return [...this.state.catalog, ...gift_cards];
        }

        return gift_cards;
    }

    filter(category) {
        this.fetchCatalog(this.state.pagination.current_page, category);
    }

    paginate(page) {
        if (this.state.action === 'filter') {
            this.fetchCatalog(page, this.state.category);
        }
    }

    render () {
        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <SectionHeader title = {header.title} message = {header.message}/>
                    <Filter filter = {::this.filter} />
                    <div className="catalog-light-content">
                        <Listing catalog = {this.state.catalog} currency = {Currency.htmlEntityFor('EUR')}/>
                        <Paginator pagination = {this.state.pagination}
                                   loading = {this.state.loading}
                                   callback = {::this.paginate} />
                    </div>
                </section>
            </div>
        )
    }
}

export default connect()(GiftCardCatalogPage);
