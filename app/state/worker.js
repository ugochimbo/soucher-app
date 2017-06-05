import * as Action from '../state/constant';

export function updateSoucher(soucher) {
    if (soucher.status !== Action.SUCCESS_RESPONSE_CODE) {
        return {
            code: soucher.code,
            message: soucher.message,
            isValid: false
        };
    }

    let value = JSON.parse(soucher.value);
    return {
        id: soucher.id,
        code: soucher.code,
        amount: value.amount,
        currency: value.currency,
        isValid: true
    };
}
