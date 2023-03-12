'use client'
import React, { useEffect, useState } from 'react'
import styles from './CurrentProductItem.module.css'
import { IProductResponse } from '@/src/API/types'
import { Button, Popover } from 'antd'
import useCardStore from '@/src/stores/cardStore'
import Link from 'next/link'

const CurrentProductItem: React.FC<ICurrentProductProps> = ({ data }: ICurrentProductProps) => {
    const [isInCard, setIsInCard] = useState<boolean>(false)

    const addProductInCard = useCardStore((state) => state.addProductInCard)
    const isProductInCard = useCardStore((state) => state.isProductInCard)

    useEffect(() => {
        setIsInCard(isProductInCard(data.id))
    }, [])

    const handleAddInCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        addProductInCard(data)
        setIsInCard(true)
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
                                <div style={{ display: 'flex' }}>
                                    <Link className={styles.button + ' customButton'} href="/card">
                                        Перейти к корзине
                                    </Link>
                                </div>
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
