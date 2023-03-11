import styles from './Header.module.css'
import Link from 'next/link'
import { headerNavItems, INavItem } from '@/src/components/common/types'

export const HeaderComponent = () => {
    // ToDo: Сделать бургер
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
                        <Link href="/profile" className={styles.navItem}>
                            <img src="/images/header/profile.svg" alt="" className={styles.img} />
                        </Link>
                        <Link href="/card" className={styles.navItem}>
                            <img src="/images/header/card.svg" alt="" className={styles.img} />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
