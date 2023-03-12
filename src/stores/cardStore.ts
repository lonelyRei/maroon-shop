import { create } from 'zustand'
import { IProductResponse } from '@/src/API/types'

interface ICardStore {
    products: IProductResponse[]
    addProductInCard: (product: IProductResponse) => void
    removeProductById: (id: number) => void
    loadProductsFromLocalStorage: () => IProductResponse[]
    isProductInCard: (id: number) => boolean
}

const PRODUCTS_IN_CARD = 'PRODUCTS_IN_CARD'

const useCardStore = create<ICardStore>((set, get) => ({
    products: [],
    addProductInCard(product: IProductResponse) {
        const newProducts = [...get().products, product]
        set({ products: newProducts })
        localStorage.setItem(PRODUCTS_IN_CARD, JSON.stringify(get().products))
    },
    removeProductById(id: number) {
        const newProducts = get().products.filter((product: IProductResponse) => product.id !== id)
        set({ products: newProducts })
        localStorage.setItem(PRODUCTS_IN_CARD, JSON.stringify(get().products))
    },
    loadProductsFromLocalStorage() {
        localStorage.getItem(PRODUCTS_IN_CARD)
            ? set({
                  products: JSON.parse(localStorage.getItem(PRODUCTS_IN_CARD)!),
              })
            : set({ products: get().products })
        return get().products
    },
    isProductInCard(id: number) {
        return Boolean(
            get().products.find((element) => {
                return element.id === id
            })
        )
    },
}))

export default useCardStore
