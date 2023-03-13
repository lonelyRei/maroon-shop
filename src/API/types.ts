// Интерфейс ответа с бэка
export interface IProductResponse {
    // Идентификатор товара
    id: number

    // Категория товара
    category: string

    // Описание товара
    description: string

    // Изображение товара
    image: string

    // Стоимость товара
    price: number

    // Заголовок товара
    title: string

    // Рейтинг товара
    rating: {
        // Рейтинг
        rate: number

        // Количество
        count: number
    }
}
