import React, {Component} from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKey: '',
        };
    }

    search() {
        if (!this.state.searchKey.trim().length) {
            return;
        }

        this.props.callback(this.state.searchKey);
    }

    handleKeyChange(searchField) {
        this.setState({
            searchKey: searchField.target.value
        });
    }

    searchPlaceHolder() {
        if(this.state.searchKey === '') {
            return 'Search';
        }

        return this.state.searchKey;
    }


    render() {
        return (
            <div className="4u 12u$(small)">
                <div className="9u 12u$(small)" style={{'float': 'left'}}>
                    <input type="text" placeholder={::this.searchPlaceHolder()}
                           value={this.state.searchKey}
                           onChange={this.handleKeyChange.bind(this)}
                    />
                </div>
                <div className="3u 12u$(small)" style={{'float': 'left'}}>
                    <button onClick={::this.search} className="button medium">Submit</button>
                </div>
            </div>
        );
    }
}
