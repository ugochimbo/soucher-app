import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import SectionHeader, {SwapCatalogPageHeader as header} from '../../Common/SectionHeader';
import {validator as validate} from '../Validator';
import Transacting from '../../Common/Transacting';
import FilterBar from '../../Filter/FilterBar';
import Paginator from '../../Paginator/Paginator';
import Listing from '../Component/Listing';
import Basket from '../Component/Basket';
import * as Currency from '../../Util/Currency';
import * as Action from '../action';
import * as LINK_TO from '../../config/constant';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';
import * as FilterConstant from '../../Filter/constant';

const  { DOM: { input } } = React;

class SwapCatalogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetching: false,
            currency: Currency.htmlEntityFor(props.soucher.currency)
        };
    }

    componentWillMount() {
        this.fetchCatalog()
    };

    fetchCatalog(page = 1, category = '') {
        this.setState({
            fetching: true
        });

        this.props.dispatch(Action.fetchCatalog(page, category))
            .then((response) => {
                if (response.payload.status === SUCCESS_RESPONSE_CODE) {
                    this.setState({
                        fetching: false
                    });
                }
            })
    };

    searchCatalog(page = 1, searchKey = '') {
        this.setState({
            fetching: true,
        });

        this.props.dispatch(Action.searchCatalog(page, searchKey))
            .then((response) => {
                const {status} = response.payload.data;

                if (status === SUCCESS_RESPONSE_CODE) {
                    this.setState({
                        fetching: false
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    filterHandler(category) {
        const {filter, catalog} = this.props;
        const page = filter.category !== category ? 1 : catalog.pagination.current_page + 1;

        this.fetchCatalog(page, category);
    }

    searchHandler(searchKey) {
        const {filter, catalog} = this.props;
        const page = filter.searchKey !== searchKey ? 1 : catalog.pagination.current_page + 1;

        this.searchCatalog(page, searchKey);
    }

    paginationHandler(page) {
        const {filter} = this.props;

        if (this.state.action === FilterConstant.actions.filter) {
            this.fetchCatalog(page, filter.category);
        }

        if (this.state.action === FilterConstant.actions.search) {
            this.searchCatalog(page, filter.searchKey);
        }
    }

    completeSwap() {
        const {basket, soucher} = this.props;

        if (!basket.items.length) {
            return;
        }

        this.props.dispatch(Action.transacting(true));

        let data = {
            soucher_id : soucher.id,
            gift_cards : basket.items,
        };

        this.props.dispatch(Action.completeSwap(data)).then((response) => {
            if (response.payload.status !== SUCCESS_RESPONSE_CODE) {
                this.props.history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
            }

            this.props.history.push(LINK_TO.SWAP_SOUCHER_SUCCESS_ROUTE);
        }).catch(() => {
            this.props.history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
        });
    };

    cancelSwap() {
        this.props.dispatch(Action.cancelSwap());
        this.props.dispatch(reset('swap-soucher-wizard'));
        this.props.history.push(LINK_TO.SWAP_SOUCHER_CANCEL_ROUTE);
    };

    isTransacting() {
        if (this.props.transacting) {
            return <Transacting message = 'Finalizing Swap' />
        }

        return '';
    };

    showPage() {
        if (!this.props.catalog.gift_cards.length) {
            return <Transacting message = "Building Catalog" />
        }

        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <SectionHeader title = {header.title} message = {header.message}/>
                    <FilterBar filter = {::this.filterHandler} search = {::this.searchCatalog} />
                    <div className="catalog-light-content">
                        <form onSubmit = {::this.completeSwap}>
                            <div className="row uniform">
                                <Listing catalog = {this.props.catalog}
                                         currency = {this.state.currency}
                                         addBasketItem = {this.props.addBasketItem}
                                />
                                <Basket basket = {this.props.basket}
                                        currency = {this.state.currency}
                                        removeBasketItem = {this.props.removeBasketItem}
                                        cancelSwap = {::this.cancelSwap}
                                        completeSwap = {::this.completeSwap}
                                />
                            </div>
                                <Paginator pagination = {this.props.catalog.pagination}
                                           loading = {this.state.fetching}
                                           callback = {::this.paginationHandler} />

                            {::this.isTransacting()}
                        </form>
                    </div>
                </section>
            </div>
        )
    }

    render() {
        return this.showPage()
    }
}

const SwapCatalog = reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(SwapCatalogPage);

const mapStateToProps = (state) => {
    return {
        soucher: state.swap.soucher,
        catalog: state.swap.catalog,
        basket: state.swap.basket,
        isComplete: state.swap.isComplete,
        transacting: state.global.transacting,
    }
};

const mapDispatchToProps = dispatch => ({
    addBasketItem : (giftCard) => {
        dispatch(Action.addBasketItem(giftCard));
    },
    removeBasketItem : (basketItem) => {
        dispatch(Action.removeBasketItem(basketItem));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SwapCatalog);
