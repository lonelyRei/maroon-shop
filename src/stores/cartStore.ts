import { create } from 'zustand'
import { IProductResponse } from '@/src/API/types'

// Интерфейс состояния для взаимодействия с корзиной покупок
// todo: increment, decrement products
interface ICartStore {
    // Список продуктов в корзине
    products: IProductResponse[]

    // Добавляет продукт в корзину
    addProductInCart: (product: IProductResponse) => void

    // Удаляет продукт по идентификатору из корзины
    removeProductById: (id: number) => void

    // Загружает продукты из local storage
    loadProductsFromLocalStorage: () => IProductResponse[]

    // Проверяет по id наличие продукта в корзине
    isProductInCart: (id: number) => boolean
}

// Константа для объявления поля в local storage
const PRODUCTS_IN_CART = 'PRODUCTS_IN_CART'

// Состояние для работы с товарами в корзине
const useCartStore = create<ICartStore>((set, get) => ({
    products: [],
    addProductInCart(product: IProductResponse) {
        const newProducts = [...get().products, product]
        set({ products: newProducts })
        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(get().products))
    },
    removeProductById(id: number) {
        const newProducts = get().products.filter((product: IProductResponse) => product.id !== id)
        set({ products: newProducts })
        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(get().products))
    },
    loadProductsFromLocalStorage() {
        localStorage.getItem(PRODUCTS_IN_CART)
            ? set({
                  products: JSON.parse(localStorage.getItem(PRODUCTS_IN_CART)!),
              })
            : set({ products: get().products })
        return get().products
    },
    isProductInCart(id: number) {
        return Boolean(
            get().products.find((element) => {
                return element.id === id
            })
        )
    },
}))

export default useCartStore
