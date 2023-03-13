import React from 'react'
import styles from './CurrentProduct.module.css'
import { IProductResponse } from '@/src/API/types'
import CurrentProductItem from '@/src/components/currentProduct/currentProductItem/CurrentProductItem'
import { Spin } from 'antd'

// Компонент конкретного товара (для страницы с детальным отображением)
export const CurrentProduct: React.FC<ICurrentProduct> = ({ isError, isLoading, isSuccess, data }: ICurrentProduct) => {
    if (isError) {
        return (
            <div className={styles.error}>
                <span>Произошла ошибка :(</span>
            </div>
        )
    } else if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin />
            </div>
        )
    } else if (isSuccess && data) {
        return <CurrentProductItem data={data} />
    } else {
        return (
            <div className={styles.error}>
                <span>Произошла ошибка :(</span>
            </div>
        )
    }
}

// Пропсы компонента
interface ICurrentProduct {
    // Флаг успешности запроса
    isSuccess: boolean

    // Флаг состояния загрузки
    isLoading: boolean

    // Флаг ошибки
    isError: boolean

    // Данные для рендеринга
    data: IProductResponse | undefined
}
