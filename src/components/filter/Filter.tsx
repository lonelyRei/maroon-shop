'use client'

import React, { useState } from 'react'
import styles from './Filter.module.css'
import { Button, Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

// Компонент для фильтрации продуктов из каталога
export const Filter: React.FC<IFilterProps> = ({ isOpen, selectCategories, selectedCategories, categoriesOptions }) => {
    // Состояние выбранных категорий сортировки (до применения)
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(selectedCategories)

    // Хендлер выбора категории для сортировки
    const handleChangeCategory = (list: CheckboxValueType[]) => {
        setCheckedList(list)
    }

    // Хендлер нажатия кнопки применения
    const handleSubmit = () => {
        selectCategories(checkedList)
    }

    // Хендлер нажатия кнопки сброса
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

// Пропсы компонента
interface IFilterProps {
    // Выбранные категории
    selectedCategories: CheckboxValueType[]

    // Callback для выбора категорий и обновления состояния родительского компонента
    selectCategories: (categories: CheckboxValueType[]) => void

    // Флаг открытия компонента
    isOpen: boolean

    // Список категорий
    categoriesOptions: string[]
}
