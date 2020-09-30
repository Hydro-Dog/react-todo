import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from "../../../redux/actions/pagination-actions";
import { StateInterface } from "../../../redux/reducers";
import styles from './pagination-component.module.scss'

interface PaginationPropsInterface {
    children?: never[];
    arr: any[];
    pageSize: number;
    changePageHandler(e: React.MouseEvent): void;
}

const PaginationComponent = (props: PaginationPropsInterface) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: any) => state.paginationReducer.currentPage);

    const getPagesCounter = (arr: any[], pageSize: number): string[] => {
        const nubersOfPages = 1 + Math.floor((arr.length-1)/pageSize)
        return Array.from({length: nubersOfPages}, (_, i) => String(i+1))
    }

    const changePageHandle = ((e: any) => {
        console.log(e.target.innerHTML)
        props.changePageHandler(e)
        dispatch(changePage(e.target.innerHTML))
    })

    const getPageItemClass = ((item: string) => {
        return item === currentPage ? styles['active-page'] : ''
    })

    return (
        <div>
            <div style={{display: 'flex'}} >
                {getPagesCounter(props.arr, props.pageSize).map((item, i) => {
                    return (
                    <div onClick={changePageHandle} className={styles['page-number'] + ' ' + getPageItemClass(item)}>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default PaginationComponent