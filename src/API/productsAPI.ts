import { IProductResponse } from '@/src/API/types'

export default class ProductsAPI {
    private static fetchURL: string = 'https://fakestoreapi.com/products'
    public static async fetchProducts(): Promise<IProductResponse[]> {
        console.log('fetching products...')
        const response: Response = await fetch(ProductsAPI.fetchURL)
        return response.json()
    }

    public static async fetchProduct(id: string): Promise<IProductResponse> {
        console.log('fetching product with id: ' + id)
        const response = await fetch(this.fetchURL + `/${id}`)
        return response.json()
    }
}
