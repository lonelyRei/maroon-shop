'use client'

import React, { useState } from 'react'
import styles from './Filter.module.css'
import { Button, Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

export const Filter: React.FC<IFilterProps> = ({ isOpen, selectCategories, selectedCategories, categoriesOptions }) => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(selectedCategories)
    const handleChangeCategory = (list: CheckboxValueType[]) => {
        setCheckedList(list)
    }

    const handleSubmit = () => {
        selectCategories(checkedList)
    }

    const handleReset = () => {
        setCheckedList(categoriesOptions)
        selectCategories(categoriesOptions)
    }

    if (isOpen) {
        return (
            <div className={styles.filter}>
                <div className={styles.filterTop}>
                    <div className={styles.filterColumn}>
                        <Checkbox.Group
                            options={categoriesOptions}
                            value={checkedList}
                            onChange={handleChangeCategory}
                        />
                    </div>
                </div>
                <div className={styles.filterBottom}>
                    <Button className={styles.filterBtn} onClick={handleSubmit}>
                        Применить
                    </Button>
                    <Button className={styles.filterBtn} onClick={handleReset}>
                        Сбросить
                    </Button>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

interface IFilterProps {
    selectedCategories: CheckboxValueType[]
    selectCategories: (categories: CheckboxValueType[]) => void
    isOpen: boolean
    categoriesOptions: string[]
}
