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

export const Start_Swap_Action = 'START_SWAP';
export const Start_Swap_Success = Start_Swap_Action + Response_Success_Suffix;
export const Start_Swap_Error = Start_Swap_Action + Response_Error_Suffix;

export const SUCCESS_RESPONSE_CODE = 200;
