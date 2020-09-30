import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

// createStore принимает в качетсве аргумента reduceEachTrailingCommentRange. reducer твечает за изменение state
export const store = createStore(
    rootReducer,
    composeWithDevTools()
)