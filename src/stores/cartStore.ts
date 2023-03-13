import { create } from 'zustand'
import { IProductResponse } from '@/src/API/types'

// Интерфейс товара в корзине
export interface ICardItem {
    // Товар
    item: IProductResponse

    // Количество единиц товара в корзине
    quantity: number
}

// Интерфейс состояния для взаимодействия с корзиной покупок
interface ICartStore {
    // Список продуктов в корзине
    products: ICardItem[]

    // Добавляет продукт в корзину
    addProductInCart: (product: IProductResponse) => void

    // Удаляет продукт по идентификатору из корзины
    removeProductById: (id: number) => void

    // Загружает продукты из local storage
    loadProductsFromLocalStorage: () => ICardItem[]

    // Проверяет по id наличие продукта в корзине
    isProductInCart: (id: number) => boolean

    // Прибавляет количество товара в корзине
    increaseProductQuantity: (id: number) => number

    // Убавляет количество товара в корзине
    decreaseProductQuantity: (id: number) => number
}

// Константа для объявления поля в local storage
const PRODUCTS_IN_CART = 'PRODUCTS_IN_CART'

// Состояние для работы с товарами в корзине
const useCartStore = create<ICartStore>((set, get) => ({
    products: [],
    addProductInCart(product: IProductResponse) {
        const newProducts: ICardItem[] = [...get().products, { item: product, quantity: 1 }]
        set({ products: newProducts })
        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(get().products))
    },
    removeProductById(id: number) {
        const newProducts = get().products.filter((product: ICardItem) => product.item.id !== id)
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
                return element.item.id === id
            })
        )
    },
    increaseProductQuantity(id: number) {
        let totalQuantity: number = 0
        const newProducts: ICardItem[] = get().products.map((product) => {
            if (product.item.id === id) {
                totalQuantity = product.quantity + 1
                return { item: product.item, quantity: product.quantity + 1 }
            } else {
                return product
            }
        })
        set({
            products: newProducts,
        })
        return totalQuantity
    },
    decreaseProductQuantity(id: number) {
        let totalQuantity: number = 0
        const newProducts: ICardItem[] = get().products.map((product) => {
            if (product.item.id === id) {
                totalQuantity = product.quantity - 1
                return { item: product.item, quantity: product.quantity - 1 }
            } else {
                return product
            }
        })
        set({
            products: newProducts,
        })
        return totalQuantity
    },
}))

export default useCartStore
