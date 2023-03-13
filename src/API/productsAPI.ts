import { IProductResponse } from '@/src/API/types'

// Статичный класс для взаимодействия с API
export default class ProductsAPI {
    // URL для фетчинга данных с бэка
    private static fetchURL: string = 'https://fakestoreapi.com/products'

    // Метод для получения всех товаров
    public static async fetchProducts(): Promise<IProductResponse[]> {
        const response: Response = await fetch(ProductsAPI.fetchURL)
        return response.json()
    }

    // Метод для получения товара по идентификатору
    public static async fetchProduct(id: string): Promise<IProductResponse> {
        const response = await fetch(this.fetchURL + `/${id}`)
        return response.json()
    }
}
