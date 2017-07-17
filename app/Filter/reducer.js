import * as FilterConstant from './constant';

let filter = {
    category: FilterConstant.category[0],
    searchKey: '',
    action: FilterConstant.actions.filter,
    shouldReset: true
};

export const FilterReducer = (state = filter, action) => {
    switch (action.type) {
        case FilterConstant.UpdateFilterAction:
            return {
                ...state,
                category: action.payload.category,
                searchKey: action.payload.searchKey,
                action: action.payload.action,
                shouldReset: true
            };
        case FilterConstant.PaginationAction:
            return {
                ...state,
                shouldReset: false
            };
        default:
            return state;
    }
};
