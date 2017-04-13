
export const Add_Contact_Details = 'addContactDetails';
export const Add_Soucher_Details = 'addSoucherDetails';
export const Add_Payment_Details = 'addPaymentDetails';

export function addContactDetails(contactDetails) {
    return {
        'type': Add_Contact_Details,
        'payload': contactDetails
    }
}

export function addSoucherDetails(soucherDetails) {
    return {
        'type': Add_Soucher_Details,
        'payload': soucherDetails
    }
}

export function addPaymentDetails(paymentDetails) {
    return {
        'type': Add_Payment_Details,
        'payload': paymentDetails
    }
}
