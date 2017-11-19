import {isSupportedCurrencies} from '../Util/Currency';

const errors = {};

const FIELD_BUYER_NAME = 'buyerName';
const FIELD_BUYER_EMAIL = 'buyerEmail';
const FIELD_RECIPIENT_NAME = 'recipientName';
const FIELD_RECIPIENT_EMAIL = 'recipientEmail';
const FIELD_NAME_ON_CARD = 'nameOnCard';
const FIELD_SOUCHER_AMOUNT = 'soucherAmount';
const FIELD_SOUCHER_CURRENCY = 'soucherCurrency';
const FIELD_SOUCHER_MESSAGE = 'soucherMessage';

const ERROR_FIELD_REQUIRED = 'Required';
const ERROR_INVALID_EMAIL = 'Invalid Email Address';
const ERROR_MINIMUM_SOUCHER_VALUE = 'Minimum of 1';

function unsetFieldError(field) {
    if(errors.hasOwnProperty(field)) {
        delete errors[field];
    }
}

function emailValidator(email) {
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return {
        'isValid' : emailRegex.test(email),
        'message' : ERROR_INVALID_EMAIL
    };
}

function validateBuyerDetails(values) {
    if (!values[FIELD_BUYER_NAME]) {
        errors[FIELD_BUYER_NAME] = ERROR_FIELD_REQUIRED;
    } else {
        unsetFieldError(FIELD_BUYER_NAME);
    }

    let buyerEmailValidation = emailValidator(values[FIELD_BUYER_EMAIL]);
    if (!buyerEmailValidation.isValid) {
        errors[FIELD_BUYER_EMAIL] = buyerEmailValidation.message;
    } else {
        unsetFieldError(FIELD_BUYER_EMAIL);
    }
}

function validateRecipientDetails(values) {
    if (!values[FIELD_RECIPIENT_NAME]) {
        errors[FIELD_RECIPIENT_NAME] = ERROR_FIELD_REQUIRED;
    } else {
        unsetFieldError(FIELD_RECIPIENT_NAME);
    }

    let recipientEmailValidation = emailValidator(values[FIELD_RECIPIENT_EMAIL]);
    if (!recipientEmailValidation.isValid) {
        errors[FIELD_RECIPIENT_EMAIL] = recipientEmailValidation.message;
    } else {
        unsetFieldError(FIELD_RECIPIENT_EMAIL);
    }
}

function validateContactDetails(values) {
    validateBuyerDetails(values);
    validateRecipientDetails(values);
}

let validateAmount = values => {
    let soucherAmount = parseFloat(values[FIELD_SOUCHER_AMOUNT]);
    if (!soucherAmount > 0) {
        errors[FIELD_SOUCHER_AMOUNT] = ERROR_MINIMUM_SOUCHER_VALUE;
    } else {
        unsetFieldError(FIELD_SOUCHER_AMOUNT);
    }
};

let validateCurrency = values => {
    let soucherCurrency = values[FIELD_SOUCHER_CURRENCY];
    if (!isSupportedCurrencies(soucherCurrency)) {
        errors[FIELD_SOUCHER_CURRENCY] = ERROR_FIELD_REQUIRED;
    } else {
        unsetFieldError(FIELD_SOUCHER_CURRENCY);
    }
};

let validateNameOnCard = values => {
    let nameOnCard = values[FIELD_NAME_ON_CARD];
    if (nameOnCard !== undefined) {
        values[FIELD_NAME_ON_CARD] = values[FIELD_NAME_ON_CARD].substr(0, 14);
    }
};

let validateMessage = values => {
    let message = values[FIELD_SOUCHER_MESSAGE];
    if (message !== undefined) {
        values[FIELD_SOUCHER_MESSAGE] = values[FIELD_SOUCHER_MESSAGE].substr(0, 30);
    }
};

function validateSoucherDetails(values) {
    validateAmount(values);
    validateCurrency(values);
    validateNameOnCard(values);
    validateMessage(values);
}

export const validator = values => {
    validateContactDetails(values);
    validateSoucherDetails(values);
    
    return errors;
};
