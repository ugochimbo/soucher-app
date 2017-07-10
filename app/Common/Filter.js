import React, {Component} from 'react';
import * as Random from '../Util/Random';

const categories = [
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
            active: categories[0]
        };
    }

    filter(category){
        this.props.filter(category);
        this.setState({
            active: category
        });
    }

    search(word) {
        console.log(word);
    }

    isSelected(category) {
        if (this.state.active === category) {
            return 'selected';
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

     render () {
        return (
                <div id="filter" className="row">
                    <div id="category" className="8u 12u$(small)">
                        <div>By Category:</div>
                        {this.filterCategories()}
                    </div>
                    <div id="search" className="4u 12u$(small)">
                        <input type="text" placeholder="search" />
                    </div>
                </div>
        )
    }
}
