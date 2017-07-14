import React, {Component} from 'react';
import * as Constant from './constant';
import * as Random from '../Util/Random';

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: '',
        };
    }

    componentWillReceiveProps() {
        if (this.state.selected === this.props.selected) {
            return;
        }

        this.setState({
            selected: this.props.selected,
        });
    }

    isSelected(category) {
        return this.props.selected === category;
    }

    filterHandler(category) {
        if (category === this.state.selected) {
            return;
        }

        this.props.callback(category);
    }

    filter() {
        return Constant.category.map((category) => {
            return <div key={Random.key()}>
                <a href="#" className={::this.isSelected(category) ? 'selected disabled' : ''} onClick={(e) => {
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
