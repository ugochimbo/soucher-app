import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Main extends Component{
    render() {

        const routes = this.props.children;

        return (
            <div id="page-wrapper">
                <NavBar />
                <div ref={'something'}>
                    {routes}
                </div>
                <Footer />
            </div>
        )
    }
}
