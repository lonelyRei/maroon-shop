import styles from './Header.module.css'
import Link from 'next/link'
import { headerNavItems, INavItem } from '@/src/components/common/types'

// Компонент шапки
export const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.headerLogo}>
                        <Link href="/">
                            <img src="/images/header/logo.svg" alt="" />
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        {headerNavItems.map((item: INavItem) => {
                            return (
                                <Link key={item.href} href={item.href} className={styles.navItem}>
                                    {item.name}
                                </Link>
                            )
                        })}
                        <Link href={headerLinks.profile} className={styles.navItem}>
                            <img src="/images/header/profile.svg" alt="" className={styles.img} />
                        </Link>
                        <Link href={headerLinks.cart} className={styles.navItem}>
                            <img src="/images/header/cart.svg" alt="" className={styles.img} />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

// Ссылки для компонента header
enum headerLinks {
    // Ссылка на корзину
    cart = '/cart',

    // Ссылка на профиль
    profile = '/profile',
}
