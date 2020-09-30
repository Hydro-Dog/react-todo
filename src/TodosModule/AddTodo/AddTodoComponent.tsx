import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Todo from "../../common/interfaces/todo.interface";
import { chengeFilter } from "../../redux/actions/filter-actions";
import { changePage } from "../../redux/actions/pagination-actions";
import { addTodo } from "../../redux/actions/todo-actions";
import styles from './AddTodoComponent.module.scss'

interface NewTodo {
    text: string;
}

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [ text, setText ] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const generateTodo = () => {
        const newTodo: Todo = {
            id: String(Math.round(Math.random()*1000)),
            text,
            checked: false,
        }

        if (text) {
            dispatch(addTodo(newTodo))
            dispatch(changePage(String(1)))
            dispatch(chengeFilter('all'))
            setText('');
        }
    }

    return (
        <div className={styles['add-todo-container']}>
            <div>
                <input
                onChange={handleChange}
                onKeyUp={(e) => {e.key === 'Enter' && generateTodo()}}
                value={text}
                type="text"
                id="newTodo"/>
            </div>
            <button onClick={generateTodo}>Add</button>
        </div>
    )
}
