import React from 'react'
import Link from 'next/link'
import styles from './productsItem.module.css'
import { IProductResponse } from '@/src/API/types'

export const ProductsItem: React.FC<IProductsItemProps> = ({ element }: IProductsItemProps) => {
    return (
        <Link href={`/catalog/${element.id}`} className={styles.product}>
            <div className={styles.productWrapper}>
                <div className={styles.productImage}>
                    <img src={element.image} alt="" className={styles.productImageItem} />
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productInfoTop}>
                        <span className={styles.productInfoItem + ' ' + styles.productTitle}>{element.title}</span>
                        <span className={styles.productInfoItem + ' ' + styles.productPrice}>{element.price} ₽</span>
                    </div>
                    <div className={styles.productInfoBottom}>
                        <span className={styles.productInfoItem + styles.productRate}>
                            Оценка: {element.rating.rate}
                        </span>
                        <span className={styles.productInfoItem + styles.productCount}>{element.rating.count}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

interface IProductsItemProps {
    element: IProductResponse
}
