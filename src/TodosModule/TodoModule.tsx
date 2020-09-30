import React from 'react'
import { useStore } from 'react-redux'
import { AddTodo } from './AddTodo/AddTodoComponent'
import TodoList from './TodoList/TodoListComponent'
import styles from './TodoModule.module.scss'

export const TodosModule = () => {
    return (
        <div className={styles.todosContainer}>
            <div className={styles.todosContent}>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
            </div>
        </div>
    )
}