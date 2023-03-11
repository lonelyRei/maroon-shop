import styles from './Footer.module.css'
import Link from 'next/link'
import { footerNavItems, INavItem } from '@/src/components/common/types'
export const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div className={styles.footerNavigation}>
                        <Link href="/" className={styles.footerLogo}>
                            <img src="/images/header/logo.svg" alt="" />
                        </Link>
                        {footerNavItems.map((item: INavItem) => {
                            return (
                                <Link key={item.href} href={item.href} className={styles.footerLink}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.footerSocials}>
                        <a href="/" className={styles.footerSocialsLink}>
                            <img src="/images/footer/facebook.svg" alt="" />
                        </a>
                        <a href="/" className={styles.footerSocialsLink}>
                            <img src="/images/footer/instagram.svg" alt="" />
                        </a>
                        <a href="/" className={styles.footerSocialsLink}>
                            <img src="/images/footer/twitter.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomContent}>
                        <span className={styles.footerBottomElement}>Maroon © 2020 Все права защищены</span>
                        <a href="/" className={styles.footerBottomElement}>
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
