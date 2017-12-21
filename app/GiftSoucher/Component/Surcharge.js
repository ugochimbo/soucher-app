import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Util from "../../Util/Money";
import {htmlEntityFor} from "../../Util/Currency";

class Surcharge extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const {soucherCurrency, soucherAmount} = this.props.formState.values;
        let currency = soucherCurrency === undefined ? '' : soucherCurrency;

        const charge = () => {
            return (currency === '' || Util.surchargeFor(soucherAmount) === 0) ?
                '0.00' : htmlEntityFor(currency) + ' ' + Util.surchargeFor(soucherAmount);
        };

        return (
            <div>
                <div className="12u$(small)" style={{"marginBottom" : "10px"}} >
                    <span style={{"marginTop" : "10px", "marginBottom" : "10px"}} className="icon fa-plus-circle" />
                    <span style={{"marginLeft" : "5px"}} /> Surcharge (operational cost) : {charge()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state.form.gift_soucher_wizard,
    }
};

export default connect(mapStateToProps)(Surcharge);
