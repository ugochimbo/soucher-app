export const category = [
    'All',
    'Popular',
    'Charity',
    'Food',
    'Electronics',
    'Entertainment',
    'Fashion'
];

export const actions = {
    search: 'search',
    filter: 'filter'
};

export const UpdateFilterAction = 'UpdateFilterAction';
export const PaginationAction = 'PaginationAction';

export const updateFilter = (category = '', searchKey = '', action = actions.filter) => {
    return {
        type: UpdateFilterAction,
        payload: {
            category: category,
            searchKey: searchKey,
            action: action
        }
    }
};

export const paginate = () => {
    return {
        type: 'PaginationAction'
    };
};
