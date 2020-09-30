import Todo from "../../common/interfaces/todo.interface";

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// actions
export const addTodo = (singleTodo: Todo) => {
    return { type: ADD_TODO, payload: singleTodo }
}

export const deleteTodo = (id: string) => {
    return { type: DELETE_TODO, payload: id }
}

export const changeText = (text: string, id: string) => {
    return { type: CHANGE_TEXT, payload: { text, id }}
}

export const toggleTodo = (id: string) => {
    return { type: TOGGLE_TODO, payload: { id }}
}

// export const completeTodo = (id: number) => {
//     return { type: COMPLETE_TODO, id }
// }

// export const setVisibility = (filter: string) => {
//     return { type: SET_VISIBILITY_FILTER, filter }
// }