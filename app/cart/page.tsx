import styles from './cart.module.css'
import { Cart } from '@/src/components/cart/Cart'

// Компонент, отображаемый по маршруту '/cart'
const page = () => {
    return (
        <div className={styles.cart}>
            <Cart />
        </div>
    )
}

export default page
