import React, {Component} from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKey: '',
        };
    }

    componentWillReceiveProps() {
        if (this.state.searchKey === this.props.searchKey) {
            return;
        }

        this.setState({
            searchKey: this.props.searchKey,
        });
    }

    search() {
        if (!this.state.searchKey.trim().length) {
            return;
        }

        this.props.callback(this.state.searchKey);
    }

    handleKeyChange(event) {
        this.setState({
            searchKey: event.target.value
        });
    }

    searchPlaceHolder() {
        if (this.state.searchKey === '') {
            return 'Search';
        }

        return this.state.searchKey;
    }

    handleSubmit(event) {
        if (event.key.toLowerCase() !== 'enter') {
            return;
        }

        this.search();
    };

    render() {
        return (
            <div className="4u 12u$(small)">
                <div className="9u 12u$(small)" style={{'float': 'left'}}>
                    <input type="text" placeholder={::this.searchPlaceHolder()}
                           onChange={this.handleKeyChange.bind(this)}
                           onKeyPress={this.handleSubmit.bind(this)}
                    />
                </div>
                <div className="3u 12u$(small)" style={{'float': 'left'}}>
                    <button onClick={::this.search} className="button medium">
                          <i className="icon fa-search fa-2x" />
                    </button>
                </div>
            </div>
        );
    }
}
