import React, { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import PaginationComponent from '../../common/components/MyPagination/pagination-component';
import MySelect from '../../common/components/MySelectComponent/my-select-component';
import Todo from '../../common/interfaces/todo.interface';
import { chengeFilter } from '../../redux/actions/filter-actions';
import { changePage } from '../../redux/actions/pagination-actions';
import { SingleTodo } from '../SingleTodo/SingleTodoComponent';
import styles from './TodoListComponent.module.scss'


const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state:any) => state.todosReducer.todos)
    const filterTab = useSelector((state: any) => state.filterReducer.filterTab)
    const currentPage = useSelector((state: any) => state.paginationReducer.currentPage)

    console.log('filterTab: ', filterTab)

    const [pageSize, setPageSize] = useState(5)
    const [optionsArr, setOptionsArr] = useState([
        {name: 'All', value: 'all', id: 1},
        {name: 'Completed', value: 'completed', id: 2},
        {name: 'Active', value: 'active', id: 3},
    ])

    const handleFilterChange = (option: any) => {
        dispatch(chengeFilter(option.value))
        dispatch(changePage('1'))
    }

    const chengePageHandle = (e: any) => {
        dispatch(changePage(e.target.innerHTML))
    }

    const getFilteredList = (filterTab: any): Todo[] => {
        switch (filterTab.value) {
            case 'all': {
                return todoList
            }
            case 'active': {
                return todoList.filter((item: Todo) => !item.checked)
            }
            case 'completed': {
                return todoList.filter((item: Todo) => item.checked)
            }
            default: return todoList;
        }
    }

    const getPaginatedList = (currentPage: string, filterTab: any): Todo[] => {
        return getFilteredList(filterTab).filter((item: Todo, i: number) => {
            return (
                i > (+currentPage - 1) * pageSize - 1 
                && i < (+currentPage) * pageSize
            )
        })
    }

    return (
        <div>
            <PaginationComponent
            arr={getFilteredList(filterTab)}
            pageSize={pageSize}
            changePageHandler={(e) => chengePageHandle(e)}
            >
            </PaginationComponent>
            <div className={styles['todo-tab-menu']}>
                <MySelect
                defaultSelectedText = {filterTab.name}
                showOptionList = {false}
                optionList = {optionsArr}
                handleChande = {handleFilterChange}
                >
                </MySelect>
            </div>
            {getPaginatedList(currentPage,filterTab).map((todo: Todo) => (
            <div>
                <SingleTodo todo={todo}></SingleTodo>
            </div>
            ))}
        </div>
    )
}

export default TodoList