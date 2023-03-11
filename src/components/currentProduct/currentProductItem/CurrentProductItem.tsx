'use client'
import React, { useState } from 'react'
import styles from './CurrentProductItem.module.css'
import { IProductResponse } from '@/src/API/types'
import { Button, Popover } from 'antd'

const CurrentProductItem: React.FC<ICurrentProductProps> = ({ data }: ICurrentProductProps) => {
    const [isInCard, setIsInCard] = useState<boolean>(false)

    const handleAddInCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('Добавить товар в корзину')
        e.preventDefault()
        setIsInCard(true)
    }

    const handleRemoveFromCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('Удалить товар из корзины')
        e.preventDefault()
        setIsInCard(false)
    }

    return (
        <div className={styles.product}>
            <div className="container">
                <div className={styles.productOuter}>
                    <div className={styles.productImage}>
                        <img src={data.image} alt="" className={styles.productImageItem} />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productAbout}>
                            <div>
                                <h3 className={styles.productTitle}>{data.title}</h3>
                                <span className={styles.productCategory}>{data.category}</span>
                            </div>
                            <p className={styles.productDescription}>{data.description}</p>
                            <div className={styles.popovers}>
                                <Popover
                                    placement="bottom"
                                    title={'Описание'}
                                    content={data.description}
                                    trigger="click"
                                >
                                    <Button>Описание</Button>
                                </Popover>
                                <Popover
                                    placement="bottom"
                                    title={'Способ применения'}
                                    content={data.description}
                                    trigger="click"
                                >
                                    <Button>Способ применения</Button>
                                </Popover>
                            </div>
                        </div>
                        <div className={styles.productOptions}>
                            <span className={styles.productPrice}>{data.price} ₽</span>
                            {isInCard ? (
                                <button className={styles.button + ' customButton'} onClick={handleRemoveFromCard}>
                                    Удалить из корзины
                                </button>
                            ) : (
                                <button className={styles.button + ' customButton'} onClick={handleAddInCard}>
                                    Добавить в корзину
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface ICurrentProductProps {
    data: IProductResponse
}

export default CurrentProductItem
