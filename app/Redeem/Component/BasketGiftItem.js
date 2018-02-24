
import React, {Component} from 'react';

export default class BasketGiftItem extends Component {
    render() {

        const {id, name, amount, currency, removeBasketItem} = this.props;

        return (
            <tr>
                <td> {name} </td>
                <td> {amount + ' ' + currency} </td>
                <td> <span style={{'marginLeft' : '2px'}} className="icon fa-trash-o"
                           onClick={() => removeBasketItem({id, name, amount})}/>
                </td>
            </tr>
        )
    }
}
