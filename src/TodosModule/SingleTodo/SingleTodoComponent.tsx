import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../../common/interfaces/todo.interface'
import { changePage } from '../../redux/actions/pagination-actions'
import { changeText, deleteTodo, toggleTodo } from '../../redux/actions/todo-actions'
import styles from './SingleTodoComponent.module.scss'

interface SingleTodoInterface {
    todo: Todo;
}

export const SingleTodo = (props: SingleTodoInterface) => {
    const [viewMode, setViewMod] = useState('view')
    const todos = useSelector((state: any) => state.todosReducer.todos)
    const currentPage = useSelector((state: any) => state.paginationReducer.currentPage)
    const dispatch = useDispatch();

    const deleteHandle = (event: React.MouseEvent) => {
        const id = (event.target as HTMLInputElement).id;
        dispatch(deleteTodo(id))
        if(Math.ceil((todos.length-1)/5) < currentPage) {
            dispatch(changePage(String(currentPage - 1)))
        }
    }

    const blurHandle = (event: React.FocusEvent) => {
        setViewMod('view')
    }

    const checkHandle = () => {
        dispatch(toggleTodo(props.todo.id))
    }

    const changeHandle = (e: any) => {
        dispatch(changeText(e.target.value, props.todo.id))
    }

    const getTodoStatus = (checked: boolean) => {
       return checked ? styles['completed'] : styles['incompleted']
    }

    if (viewMode === 'view') {
        return (
            <div>
                    <div className = {styles.todo + ' ' + getTodoStatus(props.todo.checked)}>
                        <span onDoubleClick={() => setViewMod('edit')}>
                            {props.todo.text}
                        </span>
                        <div className={styles['buttons-block']}>
                            <label className={styles['my-chbx-container']}>
                                <input
                                type="checkbox"
                                checked={props.todo.checked} 
                                onChange={checkHandle}/>
                                <span></span>
                            </label>
                            <i 
                            className={styles['del-button'] + ' material-icons'}
                            id={props.todo.id}
                            onClick={deleteHandle}
                            >
                                cancel
                            </i>
                        </div>
                    </div>
            </div>
        )
    }

    if (viewMode === 'edit') {
        return (
            <div className = {styles.todo + ' ' + getTodoStatus(props.todo.checked)}>
                <input
                type="text"
                onChange={changeHandle}
                value={props.todo.text} 
                autoFocus={true} 
                onBlur={blurHandle}/>
                <div className={styles['buttons-block']}>
                <label className={styles['my-chbx-container']}>
                    <input
                    type="checkbox"
                    checked={props.todo.checked} 
                    onChange={checkHandle}/
                    >
                        <span></span>
                    </label>
                    <i 
                        className={styles['del-button'] + ' material-icons'}
                        id={props.todo.id}
                        onClick={deleteHandle}
                        >
                            cancel
                    </i>
                </div>
            </div>
        )
    }

    return null

}