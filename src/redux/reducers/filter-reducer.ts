import { VisibilityFilters } from "../actions/filter-actions"

const options = [
    {name: 'All', value: 'all', id: 1},
    {name: 'Completed', value: 'completed', id: 2},
    {name: 'Active', value: 'active', id: 3},
] 

const initialState = {
    filterTab: {name: 'All', value: 'all', id: 1},
}

const filterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case VisibilityFilters.SHOW_ALL: {
            return {
                ...state,
                filterTab: {name: 'All', value: 'all', id: 1}
            }
        }

        case VisibilityFilters.SHOW_COMPLETED: {
            return {
                ...state,
                filterTab: {name: 'Completed', value: 'completed', id: 2}
            }
        }

        case VisibilityFilters.SHOW_ACTIVE: {
            return {
                ...state,
                filterTab: {name: 'Active', value: 'active', id: 3}
            }
        }

        default: {
            return state
        }
    }
}

export default filterReducer