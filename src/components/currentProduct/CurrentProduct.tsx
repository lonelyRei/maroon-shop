import React from 'react'
import styles from './CurrentProduct.module.css'
import { IProductResponse } from '@/src/API/types'
import CurrentProductItem from '@/src/components/currentProduct/currentProductItem/CurrentProductItem'

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
                <span>Идет загрузка...</span>
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

interface ICurrentProduct {
    isSuccess: boolean
    isLoading: boolean
    isError: boolean
    data: IProductResponse | undefined
}
