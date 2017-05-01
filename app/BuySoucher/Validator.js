
const errors = {};
const FIELD_REQUIRED = 'Required';
const INVALID_EMAIL = 'Invalid Email Address';
const INVALID_PHONE_NUMBER = 'Invalid Phone Number';
const MINIMUM_SOUCHER_VALUE_ERROR = 'Amount must be greater than 0';

function emailValidator(email) {
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let isValid = emailRegex.test(email);

    return {
        'isValid' : isValid,
        'message' : INVALID_EMAIL
    };
}

function phoneNumberValidator(phoneNumber) {
    let phoneNumberRegex = /^[+][0-9]{10,15}$/i;
    return {
        'isValid' : phoneNumberRegex.test(phoneNumber),
        'message' : INVALID_PHONE_NUMBER
    };
}

function validateBuyerDetails(values) {
    if (!values.buyerName) {
        errors.buyerName = FIELD_REQUIRED;
    } else {
        delete errors.buyerName;
    }

    let buyerEmailValidation = emailValidator(values.buyerEmail);
    if (!buyerEmailValidation.isValid) {
        errors.buyerEmail = buyerEmailValidation.message;
    } else {
        delete errors.buyerEmail;
    }
}

function validateRecipientDetails(values) {
    if (!values.recipientName) {
        errors.recipientName = FIELD_REQUIRED;
    } else {
        delete errors.recipientName;
    }

    let recipientEmailValidation = emailValidator(values.recipientEmail);
    if (!recipientEmailValidation.isValid) {
        errors.recipientEmail = recipientEmailValidation.message;
    } else {
        delete errors.recipientEmail;
    }

    let recipientPhoneValidation = phoneNumberValidator(values.recipientPhone);
    if (!recipientPhoneValidation.isValid) {
        errors.recipientPhone = recipientPhoneValidation.message;
    } else {
        delete errors.recipientPhone;
    }

}

function validateContactDetails(values) {
    validateBuyerDetails(values);
    validateRecipientDetails(values);
}

function validateSoucherDetails(values) {

    let soucherValue = parseFloat(values.soucherValue);
    if (!soucherValue > 0) {
        errors.soucherValue = MINIMUM_SOUCHER_VALUE_ERROR;
    } else {
        delete errors.soucherValue;
    }
}

export const validator = values => {
    console.log(values);
   // validateContactDetails(values);
    validateSoucherDetails(values);
    console.log(errors);
    return errors;
};

