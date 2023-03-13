import styles from './notFound.module.css'
import Link from 'next/link'
export default function NotFount() {
    return (
        <div className={styles.notFound}>
            <div className="container">
                <div className={styles.notFoundInner}>
                    <h1 className={styles.notFoundText + ' blockTitle'}>Страница не найдена :(</h1>
                    <Link className={styles.notFoundLink} href={'/'}>
                        Вернуться к каталогу
                    </Link>
                </div>
            </div>
        </div>
    )
}
