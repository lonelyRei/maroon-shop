'use client'

import React, { useState } from 'react'
import { useQuery } from 'react-query'
import ProductsAPI from '@/src/API/productsAPI'
import styles from './Products.module.css'
import { Button } from 'antd'
import { CatalogProducts } from '@/src/components/products/catalogProducts'
import { Filter } from '@/src/components/filter/Filter'
import { filterOptions } from '@/src/components/filter/filterTypes'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { useFilteredProducts } from '@/src/hooks/useFilteredProducts'

// Компонент каталога товаров
export const Products: React.FC = () => {
    // Запрос товаров
    const { isSuccess, data, isLoading, isError } = useQuery(['fetchProducts'], ProductsAPI.fetchProducts)

    // Флаг открытости фильтра товаров
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // Состояние фильтра
    const [filterState, setFilterState] = useState<IFilterState>({
        categories: filterOptions,
    })

    // Отфильтрованные по категориям продукты
    const filteredProducts = useFilteredProducts(data, filterState, isLoading)

    return (
        <div className={styles.catalog}>
            <div className="container">
                <div className={styles.catalogTop}>
                    <h3 className={styles.catalogTitle + ' blockTitle'}>Каталог</h3>
                    {isSuccess ? (
                        <Button loading={isLoading} size={'middle'} onClick={() => setIsOpen(!isOpen)}>
                            Фильтр
                        </Button>
                    ) : (
                        <></>
                    )}
                </div>
                <Filter
                    categoriesOptions={filterOptions}
                    isOpen={isOpen}
                    selectCategories={(categories: CheckboxValueType[]) =>
                        setFilterState({ ...filterState, categories: categories })
                    }
                    selectedCategories={filterState.categories}
                />
                <div className={styles.catalogWrapper}>
                    <CatalogProducts
                        isError={isError}
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                        data={filteredProducts}
                    />
                </div>
            </div>
        </div>
    )
}

// Интерфейс компонента
export interface IFilterState {
    // Список категорий
    categories: CheckboxValueType[]
}
