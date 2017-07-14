import React, {Component} from 'react';
import * as Constant from './constant';
import * as Random from '../Util/Random';

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: Constant.category[0],
        };
    }

    componentWillReceiveProps() {
        this.setState({
            category: Constant.category[0]
        });
    }

    isSelected(category) {
        if (this.state.category === category) {
            return 'selected disabled';
        }

        return '';
    }

    filterHandler(category) {
        if (category === this.state.category) {
            return;
        }

        this.props.callback(category);
    }

    filter() {
        return Constant.category.map((category) => {
            return <div key={Random.key()}>
                <a href="#" className={::this.isSelected(category)} onClick={(e) => {
                    e.preventDefault();
                    ::this.filterHandler(category);
                }}>{category}</a>
            </div>
        });
    }

    render () {
        return (
            <div id="category" className="8u 12u$(small)">
                <div id="filter" className="row">
                    <span>Filter By:</span>
                    {this.filter()}
                </div>
            </div>
        )
    }
}
