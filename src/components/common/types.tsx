enum siteRoutes {
    catalog = '/catalog',
    about = '/about',
    shops = '/shops',
    contacts = '/contacts',
}

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

export interface INavItem {
    href: string
    name: string
}
