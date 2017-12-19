import React, {Component} from 'react';
import {connect} from 'react-redux';
import SectionHeader, {CatalogPageHeader as header} from '../../Common/SectionHeader';
import FilterBar from '../../Filter/FilterBar';
import Paginator from '../../Filter/Paginator';
import Listing from '../Component/Listing';
import * as Currency from '../../Util/Currency';
import * as Action from '../../SwapSoucher/action';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';
import SideBox from "../Component/SideBox";

class GiftCardCatalogPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catalog: [],
            pagination: {},
            loading: false,
        };
    }

    componentWillMount() {
        this.fetchCatalog();
    };

    handleApiResponse(response, page) {
        const {gift_cards, pagination, status} = response.payload.data;
        const catalog = page > 1 ? [...this.state.catalog, ...gift_cards] : gift_cards;

        if (status === SUCCESS_RESPONSE_CODE) {
            this.setState({
                catalog: catalog,
                pagination: pagination,
                loading: false,
            });
        }
    }

    fetchCatalog(
        category = this.props.filter.category,
        page = this.props.filter.page
    ) {
        this.setState({loading: true});

        this.props.dispatch(Action.fetchCatalog(category, page))
            .then((response) => {::this.handleApiResponse(response, page)})
            .catch((error) => {console.log(error)});
    }

    searchCatalog(searchKey = '', page = 1) {
        this.setState({loading: true});

        this.props.dispatch(Action.searchCatalog(searchKey, page))
            .then((response) => {::this.handleApiResponse(response, page)})
            .catch((error) => {console.log(error)});
    }

    render () {
        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <SectionHeader title = {header.title} message = {header.message}/>
                    <FilterBar filterHandler = {::this.fetchCatalog} searchHandler = {::this.searchCatalog} />
                    <div className="catalog-light-content">
                        <div className="row uniform">
                            <Listing catalog = {this.state.catalog}
                                     currency = {Currency.htmlEntityFor('EUR')}
                                     loading = {this.state.loading}/>

                            <SideBox />
                        </div>

                        <Paginator pagination = {this.state.pagination}
                                   loading = {this.state.loading}
                                   filterHandler = {::this.fetchCatalog}
                                   searchHandler = {::this.searchCatalog}/>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

export default connect(mapStateToProps)(GiftCardCatalogPage);
