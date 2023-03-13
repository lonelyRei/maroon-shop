// Перечисление основных роутов сайта
enum siteRoutes {
    catalog = '/',
    about = '/about',
    shops = '/shops',
    contacts = '/contacts',
}

// Ссылки для компонента футера
export const footerNavItems: INavItem[] = [
    {
        href: siteRoutes.catalog,
        name: 'Каталог',
    },
    {
        href: siteRoutes.about,
        name: 'О нас',
    },
    {
        href: siteRoutes.shops,
        name: 'Магазины',
    },
    {
        href: siteRoutes.contacts,
        name: 'Контакты',
    },
]

// Ссылки для компонента шапки
export const headerNavItems: INavItem[] = [
    {
        href: siteRoutes.catalog,
        name: 'Каталог',
    },
    {
        href: siteRoutes.about,
        name: 'О нас',
    },
    {
        href: siteRoutes.contacts,
        name: 'Контакты',
    },
]

// Интерфейс навигационного элемента
export interface INavItem {
    // Ссылка
    href: string

    // Имя
    name: string
}

export const authorGithubLink: string = 'https://github.com/lonelyRei'
