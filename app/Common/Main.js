import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Main extends Component{
    render() {
        return (
            <div id="page-wrapper">
                <NavBar />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
