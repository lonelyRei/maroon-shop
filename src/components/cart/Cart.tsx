'use client'

import useCartStore from '@/src/stores/cartStore'
import styles from './cart.module.css'
import { CartItem } from '@/src/components/cart/cartItem/CartItem'

// Компонент корзины покупок
export const Cart = () => {
    // Получаем список товаров в корзине
    const products = useCartStore((state) => state.products)

    return (
        <div className={styles.cartOuter}>
            <div className="container">
                <h3 className={styles.cartTitle}>Корзина</h3>
                {products.length > 0 ? (
                    products.map((product) => {
                        return <CartItem key={product.id} item={product} />
                    })
                ) : (
                    <div className={styles.emptyCart}>
                        <span>Корзина покупок пуста :(</span>
                    </div>
                )}
            </div>
        </div>
    )
}
