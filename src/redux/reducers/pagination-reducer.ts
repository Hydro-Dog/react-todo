import { CHANGE_PAGE } from "../actions/pagination-actions"

const initialState = {
    currentPage: '1'
}

export const paginationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        default: {
            return state
        }
    }
}