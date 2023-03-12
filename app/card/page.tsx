import styles from './card.module.css'
import { Card } from '@/src/components/card/Card'

const page = () => {
    return (
        <div className={styles.card}>
            <Card />
        </div>
    )
}

export default page
