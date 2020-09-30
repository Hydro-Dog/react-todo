export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const chengeFilter = (filterTab: string) => {
    switch (filterTab) {
        case 'all': {
            return { type: VisibilityFilters.SHOW_ALL, payload: {}}
        }

        case 'completed': {
            return { type: VisibilityFilters.SHOW_COMPLETED, payload: {}}
        }

        case 'active': {
            return { type: VisibilityFilters.SHOW_ACTIVE, payload: {}}
        }
        
        default: break;
    }
}