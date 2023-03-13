'use client'

import React from 'react'
import { IProductResponse } from '@/src/API/types'
import { ProductsItem } from '@/src/components/products/productsItem/productsItem'
import { Col, Row } from 'antd'
import styles from './RecentlyWatched.module.css'

// Компонента со списком недавно просмотренных товаров (отвечает за рендер)
const RecentlyWatchedInner: React.FC<IRecentlyWatchedInnerProps> = ({
    recentlyWatched,
}: IRecentlyWatchedInnerProps) => {
    return (
        <div className={styles.recentlyWatchedInner}>
            {recentlyWatched.length > 0 ? (
                <Row gutter={[40, 8]} justify={'center'}>
                    {Array.from(recentlyWatched.values())
                        .reverse()
                        .slice(0, 4)
                        .map((product: IProductResponse) => {
                            return (
                                <Col key={product.id} xl={6} sm={12} xs={12}>
                                    <ProductsItem element={product} />
                                </Col>
                            )
                        })}
                </Row>
            ) : (
                <div className={styles.nothing}>
                    <span>Вы пока что не проссматривали товары</span>
                </div>
            )}
        </div>
    )
}

// Пропсы компонента
interface IRecentlyWatchedInnerProps {
    // Список товаров
    recentlyWatched: IProductResponse[]
}

export default RecentlyWatchedInner
