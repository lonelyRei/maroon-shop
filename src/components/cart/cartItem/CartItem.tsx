import React from 'react'
import styles from './cartItem.module.css'
import Link from 'next/link'
import useCartStore, { ICardItem } from '@/src/stores/cartStore'
import { Button, Popover } from 'antd'

// Элемент корзины покупок (для рендера)
export const CartItem: React.FC<ICartItemProps> = ({ product }) => {
    // Метод для удаления товара из коризны
    const removeFromCart = useCartStore((state) => state.removeProductById)

    // Методы для увеличения / уменьшения количества товара в корзине
    const increaseProductQuantity = useCartStore((state) => state.increaseProductQuantity)
    const decreaseProductQuantity = useCartStore((state) => state.decreaseProductQuantity)

    // Хендлер увеличения количества товара
    const handleIncrease = () => {
        increaseProductQuantity(product.item.id)
    }

    // Хендлер уменьшения количества товара
    const handleDecrease = () => {
        const quantity = decreaseProductQuantity(product.item.id)

        // Если количество < 1, то удаляем товар из корзины
        if (quantity < 1) {
            removeFromCart(product.item.id)
        }
    }

    // Хендлер удаления товара из корзины
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        // Удаляем товар из корзины
        removeFromCart(product.item.id)
    }

    return (
        <div className={styles.cartItem}>
            <Link href={`/catalog/${product.item.id}`} className={styles.cartImage}>
                <img src={product.item.image} alt="" className={styles.cartImageItem} />
            </Link>
            <div className={styles.cartItemInfo}>
                <div className={styles.cartItemInfoTop}>
                    <span className={styles.cartItemTitle}>{product.item.title}</span>
                    <span className={styles.cartItemCategory}>{product.item.category}</span>
                    <Popover
                        placement="bottom"
                        title={'Описание товара'}
                        content={product.item.description}
                        trigger="click"
                    >
                        <Button className={styles.description}>Описание</Button>
                    </Popover>
                </div>
                <div className={styles.cartItemInfoBottom}>
                    <div className={styles.cardItemInfoBlock}>
                        <span className={styles.cartItemPrice}>{product.item.price} ₽</span>
                        <span className={styles.cartItemCount}>Количество: {product.quantity}</span>
                    </div>

                    <div className={styles.cardItemActionsPanel}>
                        <button className={styles.cardItemAction} onClick={handleIncrease}>
                            +
                        </button>
                        <button className={styles.cardItemAction} onClick={handleDecrease}>
                            -
                        </button>
                        <button onClick={handleRemove} className={styles.remove + ' customButton'}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Пропсы компонента
interface ICartItemProps {
    // Данные для рендеринга
    product: ICardItem
}
