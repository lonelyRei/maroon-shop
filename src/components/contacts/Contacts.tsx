import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className="container">
                <div className={styles.contactsOuter}>
                    <div className={styles.info}>
                        <h3 className={styles.title + ' blockTitle'}>Контакты</h3>
                        <div className={styles.address}>
                            <span className={styles.subtitle}>Адрес</span>
                            <span className={styles.text}>
                                Санкт-Петербург,
                                <br /> ул. Большая Конюшенная, 19
                            </span>
                        </div>
                        <div className={styles.phone}>
                            <span className={styles.subtitle}>Телефон</span>
                            <a className={styles.text} href="tel:+79238889060">
                                +7 (923) 888-90-60
                            </a>
                        </div>
                        <div className={styles.mail}>
                            <span className={styles.subtitle}>E-mail</span>
                            <span className={styles.text}>info@maroon.ru</span>
                        </div>
                        <div className={styles.social}>
                            <a href="/" className={styles.socialsLink}>
                                <img src="/images/footer/facebook.svg" alt="" />
                            </a>
                            <a href="/" className={styles.socialsLink}>
                                <img src="/images/footer/instagram.svg" alt="" />
                            </a>
                            <a href="/" className={styles.socialsLink}>
                                <img src="/images/footer/twitter.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <a
                            href="https://yandex.ru/maps/?um=constructor%3A741fb47bb838d66cbc3804e08e80db80e601c8c62e22d822cb44fbf9378885f3&amp;source=constructorStatic"
                            target="_blank"
                        >
                            <img
                                src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A741fb47bb838d66cbc3804e08e80db80e601c8c62e22d822cb44fbf9378885f3&amp;width=600&amp;height=422&amp;lang=ru_RU"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
