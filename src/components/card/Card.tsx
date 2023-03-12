'use client'

import useCardStore from '@/src/stores/cardStore'
import styles from './card.module.css'
import { CardItem } from '@/src/components/card/cardItem/CardItem'

export const Card = () => {
    const products = useCardStore((state) => state.products)

    return (
        <div className={styles.cardOuter}>
            <div className="container">
                <h3 className={styles.cardTitle}>Корзина</h3>
                {products.length > 0 ? (
                    products.map((product) => {
                        return <CardItem key={product.id} item={product} />
                    })
                ) : (
                    <div className={styles.emptyCard}>
                        <span>Корзина покупок пуста :(</span>
                    </div>
                )}
            </div>
        </div>
    )
}
