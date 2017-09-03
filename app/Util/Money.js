
export const format = amount => {

    if (amount === undefined) {
        return '0.00';
    }

    let whole, fraction;
    let decIndex = amount.lastIndexOf('.');

    if (decIndex > 0) {
        whole = amount.substr(0, decIndex);
        fraction = amount.substr(decIndex);
    } else {
        whole = amount + '.00';
    }

    let rgx = /(\d+)(\d{3})/;

    while (rgx.test(whole)) {
        whole = whole.replace(rgx, '$1' + ',' + '$2')
    }

    return fraction ? whole + fraction : whole;
};
