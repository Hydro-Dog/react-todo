import { SelectOptionInterface } from "./filter-tab-option.interface";

export interface MySelectInterface {
    children?: never[];
    defaultSelectedText?: any;
    showOptionList: boolean;
    optionList: any[];
    handleChandeAction: any;
}