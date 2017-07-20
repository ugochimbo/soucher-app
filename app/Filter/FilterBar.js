import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Constant from './constant';
import Filter from './Filter';
import Search from './Search';

const RESET_STATE = 1;

export class FilterBar extends Component {

    handleFilterAction(category) {
        this.props.dispatch(Constant.updateFilter(category, '', Constant.actions.filter));

        this.props.filterHandler(category, RESET_STATE);
    }

    handleSearchAction(searchKey) {
        this.props.dispatch(Constant.updateFilter(Constant.category[0], searchKey, Constant.actions.search));

        this.props.searchHandler(searchKey, RESET_STATE);
    }

    render () {
        return (
                <div id="filter" className="row">
                    <Filter callback = {::this.handleFilterAction} selected = {this.props.filter.category} />
                    <Search callback = {::this.handleSearchAction} searchKey = {this.props.filter.searchKey} />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

export default connect(mapStateToProps)(FilterBar);
