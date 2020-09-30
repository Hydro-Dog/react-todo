import { SelectOptionInterface } from "../../common/interfaces/filter-tab-option.interface";
import { MySelectInterface } from "../../common/interfaces/filter-tab.interface";

export const CHANGE_FILTER_TAB = 'CHANGE_PAGE';

export const changeFilterTab = (tab: SelectOptionInterface) => {
    return { type: CHANGE_FILTER_TAB, payload: tab }
}