import React, {Component} from 'react';
import * as Constant from './constant';
import Filter from './Filter';
import Search from './Search';

export default class FilterBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            action: Constant.actions.filter
        };
    }

    shouldResetFilter() {
        return this.state.action === Constant.actions.search;
    }

    handleFilterAction(category) {
        this.setState({
            action: Constant.actions.filter
        });

        this.props.filterHandler(category);
    }

    handleSearchAction(searchKey) {
        this.setState({
            action: Constant.actions.search
        });

        this.props.searchHandler(searchKey);
    }

    render () {
        return (
                <div id="filter" className="row">
                    <Filter callback = {::this.handleFilterAction} shouldReset = {this.shouldResetFilter()} />
                    <Search callback = {::this.handleSearchAction} />
                </div>
        )
    }
}
