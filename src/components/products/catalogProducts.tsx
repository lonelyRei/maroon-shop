import React, { ReactNode } from 'react'
import { IProductResponse } from '@/src/API/types'
import { ProductsItem } from '@/src/components/products/productsItem/productsItem'
import styles from './Products.module.css'
import { Col, Row, Spin } from 'antd'

// Компонент списка продуктов (отвечает за рендеринг)
export const CatalogProducts: React.FC<ICatalogProductsProps> = ({ isError, isLoading, isSuccess, data }) => {
    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spin />
            </div>
        )
    } else if (isError) {
        return <div className={styles.error}>Произошла ошибка загрузки товаров :(</div>
    } else if (isSuccess) {
        return data!.length > 0 ? (
            <Row gutter={[50, 50]}>
                {data!.map((element: IProductResponse): ReactNode => {
                    return (
                        <Col xl={6} sm={12} xs={12} key={element.id}>
                            <ProductsItem element={element} />
                        </Col>
                    )
                })}
            </Row>
        ) : (
            <div className={styles.nothing}>
                <span>По вашему запросу ничего не найдено :(</span>
            </div>
        )
    } else {
        return <div className={styles.nothing}>Ничего не найдено :(</div>
    }
}

// Пропсы компонента
interface ICatalogProductsProps {
    // Флаг ошибки
    isError: boolean

    // Флаг загрузки
    isLoading: boolean

    // Флаг успешности операции запроса на бэк
    isSuccess: boolean

    // Данные для рендеринга
    data: IProductResponse[] | undefined
}
