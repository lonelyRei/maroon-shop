import styles from './Follow.module.css'
import { authorGithubLink } from '@/src/components/common/types'

export const Follow = () => {
    return (
        <div className={styles.follow}>
            <div className="container">
                <div className={styles.followInner}>
                    <div className={styles.gallery}>
                        <div className={styles.galleryItem}>
                            <img src="/images/products/follow/1.png" alt="" />
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="/images/products/follow/2.png" alt="" />
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="/images/products/follow/3.png" alt="" />
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="/images/products/follow/4.png" alt="" />
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="/images/products/follow/5.png" alt="" />
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="/images/products/follow/6.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.followInfo}>
                        <h3 className={styles.followTitle + ' blockTitle'}>Присоединяйтесь к нам</h3>
                        <p className={styles.followText}>
                            Подпишитесь на наш аккаунт @marooncare и узнавайте о новинках и акциях первыми
                        </p>
                        <a target={'_blank'} href={authorGithubLink} className="customButton">
                            Подписаться
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
