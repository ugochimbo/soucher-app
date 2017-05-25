const errors = {};
const SOUCHER_CODE_LENGTH = 9;
const PHONE_AUTH_CODE_LENGTH = 5;

const FIELD_SOUCHER_CODE = 'soucherCode';
const FIELD_PHONE_AUTH_CODE = 'authCode';
const FIELD_SOUCHER_VALUE = 'soucherValue';

const ERROR_INVALID_CODE = 'Invalid Code';

function unsetFieldError(field) {
    if (errors.hasOwnProperty(field)) {
        delete errors[field];
    }
}

function validatePhoneAuthenticationCode(values) {
  //  if (values[FIELD_PHONE_AUTH_CODE].length !== PHONE_AUTH_CODE_LENGTH) {
  //      errors[FIELD_PHONE_AUTH_CODE] = ERROR_INVALID_CODE;
  //  } else {
  //      unsetFieldError(FIELD_SOUCHER_VALUE);
  //  }
}

function validateSelectedVouchers(values) {
    if (values[FIELD_SOUCHER_CODE].length !== SOUCHER_CODE_LENGTH) {
        errors[FIELD_SOUCHER_CODE] = ERROR_INVALID_CODE;
    } else {
        unsetFieldError(FIELD_SOUCHER_VALUE);
    }
}

function validateSoucherCode(values) {
    if (values[FIELD_SOUCHER_CODE] === undefined || values[FIELD_SOUCHER_CODE].length !== SOUCHER_CODE_LENGTH) {
        errors[FIELD_SOUCHER_CODE] = ERROR_INVALID_CODE;
    } else {
        unsetFieldError(FIELD_SOUCHER_CODE);
    }
}

export function setValidationMessage(field, message = ERROR_INVALID_CODE) {
    console.log(field);
    errors[field] = message;
}

export const validator = values => {
    validateSoucherCode(values);
    console.log(values);
   // validateSelectedVouchers(values);
   // validatePhoneAuthenticationCode(values);

    return errors;
};
