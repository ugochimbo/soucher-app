
export const format = amount => {

    if (amount === undefined) {
        return '0.00';
    }

    let whole, fraction;
    let decIndex = amount.lastIndexOf('.');

    if (decIndex > 0) {
        whole = amount.substr(0, decIndex);
        fraction = amount.substr(decIndex, 3);
    } else {
        whole = amount + '.00';
    }

    let rgx = /(\d+)(\d{3})/;

    while (rgx.test(whole)) {
        whole = whole.replace(rgx, '$1' + ',' + '$2')
    }

    return fraction ? whole + fraction : whole;
};

export const surchargeFor = soucherAmount => {

    if (soucherAmount > 0 && soucherAmount < 50.01) return 1.99;
    else if (soucherAmount < 100.01) return 2.99;
    else if (soucherAmount < 150.01) return 3.99;
    else if (soucherAmount < 200.01) return 4.99;
    else return 0;
};

