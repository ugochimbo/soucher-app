import React, {Component} from 'react';
import {connect} from 'react-redux';
import Waypoint from 'react-waypoint';
import SectionHeader, {CatalogPageHeader as header} from '../../Common/SectionHeader';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import * as Currency from '../../Util/Currency';
import * as Action from '../../SwapSoucher/action';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

class GiftCardCatalogPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catalog: [],
            pagination: {},
            loading: true
        };
    }

    componentWillMount() {
        this.fetchCatalog();
    };

    nextPage() {
        if (this.state.pagination.next_page_url !== null) {
            this.fetchCatalog(this.state.pagination.current_page + 1);
        }
    }

    fetchCatalog(page = 1) {

        this.setState({
            loading: true
        });

        this.props.dispatch(Action.fetchCatalog(page))
            .then((response) => {
                const {gift_cards, pagination, status} = response.payload.data;

                if (status === SUCCESS_RESPONSE_CODE) {
                    this.setState({
                        catalog: [...this.state.catalog, ...gift_cards],
                        pagination: pagination,
                        loading: false
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    paginate() {
        if (!this.state.loading) {
            return <Waypoint onEnter={::this.nextPage} threshold={2.0} bottomOffset = {'250px'} />
        }

        return <div>... Loading</div>
    }

    render () {
        return (
            <div id="main-full" className="full">
                <section id="content" className="default">
                    <SectionHeader title = {header.title} message = {header.message}/>
                    <Filter />
                    <div className="catalog-light-content">
                        <div className="row uniform">
                            <Listing catalog = {this.state.catalog}
                                     currency = {Currency.htmlEntityFor('EUR')}
                            />
                        </div>
                    </div>
                    <div className="row uniform align-center">
                        {::this.paginate()}
                    </div>
                </section>
            </div>
        )
    }
}

export default connect()(GiftCardCatalogPage);
