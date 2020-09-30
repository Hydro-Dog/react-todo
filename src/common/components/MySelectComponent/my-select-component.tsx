import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './my-select-component.module.scss'

interface MySelectInterface {
    children?: never[];
    defaultSelectedText: SelectOptionInterface;
    showOptionList: boolean;
    optionList: any[];
    handleChande(obj: SelectOptionInterface): any;
}

interface SelectOptionInterface {
    name: string; 
    value: string;
    id: number;
}

const MySelect = (props: MySelectInterface) => {
    const dispatch = useDispatch
    const defaultSelectedText = useSelector((state: any) => state.filterReducer.filterTab.name)
    const [showOptionList, setShowOptionList] = useState(props.showOptionList)
    const [optionList, setOptionsList] = useState(props.optionList)
    
    const handleClickOutside = (e: any) => {
        if (e.target.tagName !== 'HTML') {
            if (
                !e.target.classList.contains(styles['my-select-option'])
                && !e.target.classList.contains(styles['my-default-text'])
                && !e.target.classList.contains(styles['current-option-container'])
                && !e.target.parentNode.classList.contains(styles['current-option-container'])
                ) {
                    setShowOptionList(false)
                }
        }
    }

    const handleListToggle = (e: any) => {
        setShowOptionList(!showOptionList)
    }

    const handleOptionClick = (e: any) => {
        console.log('e.target.id')
        const id = e.target.id
        const value = e.target.getAttribute('data-value')
        const name = e.target.innerHTML
        setShowOptionList(false);
        props.handleChande({name,value,id})
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {document.removeEventListener('mousedown', handleClickOutside)}
    })

    return (
        <div className={styles['custom-select-container']}>
            <div 
            className={styles['current-option-container']} 
            onClick={handleListToggle}>
                <div className={styles['selected-option']}>
                    {defaultSelectedText} 
                </div>
                <i className="material-icons">arrow_drop_down</i>
            </div>
            <div className={styles['options']}>
                {showOptionList && (
                    <div 
                    className={styles['current-option']}
                    onClick={handleOptionClick}
                    >
                        {
                        optionList.map((item: SelectOptionInterface) => {
                            return (
                                <div
                                className={styles['my-select-option']}
                                data-value={item.value}
                                >
                                    {item.name}
                                </div>
                            )    
                        })
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default MySelect