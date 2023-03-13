// Перечисление категорий товаров
export enum categories {
    man = "men's clothing",
    jewelery = 'jewelery',
    electronics = 'electronics',
    women = "women's clothing",
    all = 'all',
}

// Список категорий товаров
export const filterOptions: string[] = [categories.man, categories.women, categories.jewelery, categories.electronics]
