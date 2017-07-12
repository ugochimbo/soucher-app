import React, {Component} from 'react';
import * as Random from '../Util/Random';

const categories = [
    'All',
    'Popular',
    'Charity',
    'Food',
    'Electronics',
    'Entertainment',
    'Fashion'
];

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: categories[0],
            searchKey: ''
        };
    }

    filter(category){
        this.props.filter(category);
        this.setState({
            active: category,
            searchKey: ''
        });
    }

    search() {
        this.props.search(this.state.searchKey);
        this.setState({
            active: categories[0]
        });
    }

    isSelected(category) {
        if (this.state.active === category) {
            return 'selected disabled';
        }

        return '';
    }

    filterCategories() {
        return categories.map((category) => {
            return <div key={Random.key()}>
                <a href="#" className={::this.isSelected(category)} onClick={(e) => {
                    e.preventDefault();
                    ::this.filter(category);
                }}>{category}</a>
            </div>
        });
    }

    searchPlaceHolder() {
         if(this.state.searchKey === '') {
             return 'Search';
         }

         return this.state.searchKey;
    }

    handleSearchKeyChange(searchField) {
        this.setState({
            searchKey: searchField.target.value
        });
    }

     render () {
        return (
                <div id="filter" className="row">
                    <div id="category" className="8u 12u$(small)">
                        <div>By Category:</div>
                        {this.filterCategories()}
                    </div>
                    <div id="search" className="4u 12u$(small)">
                        <input type="text" placeholder={::this.searchPlaceHolder()} value={this.state.searchKey} onChange={this.handleSearchKeyChange.bind(this)} />
                        <button onClick={::this.search}>Submit</button>
                    </div>
                </div>
        )
    }
}
