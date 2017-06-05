import * as Action from '../state/constant';
import * as LINK_TO from '../config/constant';

export const endTransaction = (history) => {
    history.push(LINK_TO.HOME);
};

export const swapSoucher = (soucherDetails) => {
    return {
        'type': [Action.Swap_Soucher_Action],
        'payload': soucherDetails
    }
};

export const fetchSoucher = (values) => {
    return {
        'type': [Action.Fetch_Soucher_Action],
        'payload': {
            request: {
                url: `/soucher/gift/${values.soucherCode}`,
                method: 'GET',
            },
        }
    }
};

export const fetchCatalog = () => {
    return {
        'type': [Action.Fetch_Catalog_Action],
        'payload': {
            request: {
                url: '/voucher',
                method: 'GET',
            }
        }
    }
};

export const demoRedux = (data) => {
    return {
        'type': Action.Start_Swap_Action,
        'data': data
    }
};