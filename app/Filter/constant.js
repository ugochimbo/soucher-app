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

export const updateFilterAction = 'UpdateFilter';

export const updateFilter = (category = '', searchKey = '', action = actions.filter) => {
    return {
        type: updateFilterAction,
        payload: {
            category: category,
            searchKey: searchKey,
            action: action
        }
    }
};
