import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SectionHeader from '../../Common/SectionHeader';
import ContactDetailsForm from '../Component/ContactDetailsForm';

class ContactFormContainer extends Component{
     render() {
         let header = {
             title: 'Contact Details',
             message: 'Please provide contact details for you and your loved one.',
         };

        return (
            <div id="main">
                <section id="content" className="default">
                    <SectionHeader title={header.title} message={header.message} />
                    <form>
                        <div className="light-content">
                            <ContactDetailsForm />
                            <div className="row uniform" style={{'marginTop': '20px'}}>
                                <div className="12u$">
                                    <ul className="actions align-center">
                                        <li>
                                            <Link to="/buy/card-details" className="button big special">
                                                <span className="icon fa-gift"/>
                                                <span> Soucher Details </span>
                                                <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactFormContainer);
