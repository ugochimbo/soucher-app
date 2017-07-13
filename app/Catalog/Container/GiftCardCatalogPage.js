import React, {Component} from 'react';
import {connect} from 'react-redux';
import SectionHeader, {CatalogPageHeader as header} from '../../Common/SectionHeader';
import FilterBar from '../../Common/Filter';
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
            searchKey: '',
            action: 'filter'
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
                        catalog: ::this.updateFilteredCatalog(gift_cards, category),
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

    updateFilteredCatalog(gift_cards, category) {
        if (category === this.state.category) {
            return [...this.state.catalog, ...gift_cards];
        }

        return gift_cards;
    }

    searchCatalog(page = 1, searchKey = '') {

        this.setState({
            loading: true,
        });

        this.props.dispatch(Action.searchCatalog(page, searchKey))
            .then((response) => {
                const {gift_cards, pagination, status} = response.payload.data;

                if (status === SUCCESS_RESPONSE_CODE) {
                    this.setState({
                        catalog: ::this.updateSearchedCatalog(gift_cards, searchKey),
                        pagination: pagination,
                        loading: false,
                        category: 'All',
                        searchKey: searchKey,
                        action: 'search'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    updateSearchedCatalog(gift_cards, searchKey) {
        if (searchKey === this.state.searchKey) {
            return [...this.state.catalog, ...gift_cards];
        }

        return gift_cards;
    }

    filterHandler(category) {
        const page = this.state.category !== category ? 1 : this.state.pagination.current_page + 1;
        this.fetchCatalog(page, category);
    }

    searchHandler(searchKey) {
        const page = this.state.searchKey !== searchKey ? 1 : this.state.pagination.current_page + 1;
        this.searchCatalog(page, searchKey);
    }

    paginationHandler(page) {
        if (this.state.action === 'filter') {
            this.fetchCatalog(page, this.state.category);
        }

        if (this.state.action === 'search') {
            this.searchCatalog(page, this.state.searchKey);
        }
    }

    render () {
        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <SectionHeader title = {header.title} message = {header.message}/>
                    <FilterBar filterHandler = {::this.filterHandler} searchHandler = {::this.searchHandler}/>
                    <div className="catalog-light-content">
                        <Listing catalog = {this.state.catalog} currency = {Currency.htmlEntityFor('EUR')}/>
                        <Paginator pagination = {this.state.pagination}
                                   loading = {this.state.loading}
                                   callback = {::this.paginationHandler}
                                   action = {this.state.action}
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default connect()(GiftCardCatalogPage);
