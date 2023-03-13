import React from 'react'
import { IProductResponse } from '@/src/API/types'
import styles from './cartItem.module.css'
import Link from 'next/link'
import useCartStore from '@/src/stores/cartStore'
import { Button, Popover } from 'antd'

// Элемент корзины покупок (для рендера)
export const CartItem: React.FC<ICartItemProps> = ({ item }) => {
    // Метод для удаления товара из коризны
    const removeFromCart = useCartStore((state) => state.removeProductById)

    // Хендлер удаления товара из корзины
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        // Удаляем товар из корзины
        removeFromCart(item.id)
    }
    return (
        <div className={styles.cartItem}>
            <Link href={`/catalog/${item.id}`} className={styles.cartImage}>
                <img src={item.image} alt="" className={styles.cartImageItem} />
            </Link>
            <div className={styles.cartItemInfo}>
                <div className={styles.cartItemInfoTop}>
                    <span className={styles.cartItemTitle}>{item.title}</span>
                    <span className={styles.cartItemCategory}>{item.category}</span>
                    <Popover placement="bottom" title={'Описание товара'} content={item.description} trigger="click">
                        <Button className={styles.description}>Описание</Button>
                    </Popover>
                </div>
                <div className={styles.cartItemInfoBottom}>
                    <span className={styles.cartItemPrice}>{item.price} ₽</span>
                    <button onClick={handleRemove} className={styles.remove + ' customButton'}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}

// Пропсы компонента
interface ICartItemProps {
    // Данные для рендеринга
    item: IProductResponse
}
