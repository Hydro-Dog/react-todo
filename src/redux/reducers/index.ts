import { combineReducers } from 'redux';
import { todosReducer } from './todo-reducer'
import { paginationReducer } from './pagination-reducer'
import filterReducer from './filter-reducer'
import { tabsReducer } from './tabs-reduser'

export interface StateInterface {
  todosReducer(): any,
  filterReducer(): any,
  paginationReducer(): any,
}

const rootReducer = combineReducers({
    todosReducer,
    filterReducer,
    paginationReducer,
    tabsReducer,
  })

export default rootReducer