'use client'
import React, { useEffect, useState } from 'react'
import styles from './CurrentProductItem.module.css'
import { IProductResponse } from '@/src/API/types'
import { Button, Popover } from 'antd'
import useCartStore from '@/src/stores/cartStore'
import Link from 'next/link'

// Компонент товара для детального отображения (отвечает за рендеринг)
const CurrentProductItem: React.FC<ICurrentProductProps> = ({ data }: ICurrentProductProps) => {
    // Состояние нахождения продукта в корзине
    const [isInCart, setIsInCart] = useState<boolean>(false)

    // Метод для добавления товара в корзину
    const addProductInCart = useCartStore((state) => state.addProductInCart)

    // Метод проверки нахождения товара в корзине
    const isProductInCart = useCartStore((state) => state.isProductInCart)

    // При монтировании компонента проверяем находится ли он в корзине
    useEffect(() => {
        setIsInCart(isProductInCart(data.id))
    }, [])

    // Хендлер добавления товара в корзину
    const handleAddInCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        // Добавляем товар в корзину
        addProductInCart(data)

        // Обновляем состояние
        setIsInCart(true)
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
                            {isInCart ? (
                                <div style={{ display: 'flex' }}>
                                    <Link className={styles.button + ' customButton'} href="/cart">
                                        Перейти к корзине
                                    </Link>
                                </div>
                            ) : (
                                <button className={styles.button + ' customButton'} onClick={handleAddInCart}>
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

// Пропсы компонента
interface ICurrentProductProps {
    // Данные для рендеринга
    data: IProductResponse
}

export default CurrentProductItem
