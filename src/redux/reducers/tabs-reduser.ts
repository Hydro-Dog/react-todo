import { CHANGE_FILTER_TAB } from "../actions/tabs-actions"

const initialState = {
    filterTab: {name: 'All', value: 'all', id: 1},
}

export const tabsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case CHANGE_FILTER_TAB: {
            return {
                ...state,
                filterTab: action.payload
            }
        }

        default: {
            return state
        }
    }
}