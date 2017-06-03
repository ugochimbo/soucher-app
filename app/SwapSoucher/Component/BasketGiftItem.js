
import React, {Component} from 'react';

export default class BasketGiftItem extends Component {
    render() {

        const {name, value} = this.props;
        return (
            <tr>
                <td> {name} </td>
                <td> {value} </td>
            </tr>
        )
    }
}
