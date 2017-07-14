import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Constant from './constant';
import Filter from './Filter';
import Search from './Search';

export class FilterBar extends Component {

    handleFilterAction(category) {
        this.props.dispatch(Constant.updateFilter(category, '', Constant.actions.filter));
        this.props.filterHandler(category);
    }

    handleSearchAction(searchKey) {
        this.props.dispatch(Constant.updateFilter(Constant.category[0], searchKey, Constant.actions.search));
        this.props.searchHandler(searchKey);
    }

    render () {
        const {category, searchKey} = this.props.filter;

        return (
                <div id="filter" className="row">
                    <Filter callback = {::this.handleFilterAction} selected = {category} />
                    <Search callback = {::this.handleSearchAction} searchKey = {searchKey} />
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
