export const Response_Success_Suffix = '_SUCCESS';
export const Response_Error_Suffix = '_FAILURE';

export const Swap_Soucher_Action = 'SWAP_SOUCHER';
export const Swap_Soucher_Error = Swap_Soucher_Action + Response_Error_Suffix;

export const Fetch_Soucher_Action = 'VALIDATE_SOUCHER_CODE';
export const Fetch_Soucher_Success = Fetch_Soucher_Action + Response_Success_Suffix;
export const Fetch_Soucher_Error = Fetch_Soucher_Action + Response_Error_Suffix;

export const Fetch_Catalog_Action = 'FETCH_CATALOG';
export const Fetch_Catalog_Success = Fetch_Catalog_Action + Response_Success_Suffix;
export const Fetch_Catalog__Error = Fetch_Catalog_Action + Response_Error_Suffix;

export const Add_Basket_Item_Action = 'ADD_BASKET_ITEM';
export const Remove_Basket_Item_Action = 'DELETE_BASKET_ITEM';
export const Cancle_Swap_Action = 'CANCEL_SWAP';

export const SUCCESS_RESPONSE_CODE = 200;
