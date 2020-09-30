export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = (pageNumber: string) => {
    return { type: CHANGE_PAGE, payload: pageNumber }
}