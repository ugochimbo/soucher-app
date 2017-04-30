import React, {Component} from 'react';

export default class SectionHeader extends Component{
    render() {
        return (
            <header className="major">
                <h2>{this.props.title}</h2>
                <p>
                    {this.props.message}
                </p>
            </header>
        )
    }
}
