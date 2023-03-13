import { create } from 'zustand'
import { IProductResponse } from '@/src/API/types'

// Интерфейс состояния для взаимодействия с просмотренными товарами
interface IRecentlyWatchedStore {
    // Просмотренные товары
    recentlyWatched: IProductResponse[]

    // Добавляет товар в просмотренные товары
    addRecentlyWatched: (product: IProductResponse) => void

    // Загружает просмотренные товары из locale storage
    loadRecentlyWatchedFromLocalStore: () => IProductResponse[]
}

// Константа для объявления поля в local storage
const RECENTLY_WATCHED_PRODUCTS: string = 'RECENTLY_WATCHED_PRODUCTS'

// Состояние для просмотренных товаров из каталога
const useRecentlyWatchedStore = create<IRecentlyWatchedStore>((set, get) => ({
    recentlyWatched: [],
    addRecentlyWatched: (element: IProductResponse) => {
        console.log('addRecentlyWatched')
        set({
            recentlyWatched: [...get().recentlyWatched.filter((mapElement) => mapElement.id !== element.id), element],
        })
        localStorage.setItem(RECENTLY_WATCHED_PRODUCTS, JSON.stringify(get().recentlyWatched))
    },
    loadRecentlyWatchedFromLocalStore: () => {
        console.log('loadRecentlyWatchedFromLocalStore')
        localStorage.getItem(RECENTLY_WATCHED_PRODUCTS)
            ? set({
                  recentlyWatched: JSON.parse(localStorage.getItem(RECENTLY_WATCHED_PRODUCTS)!),
              })
            : set({ recentlyWatched: get().recentlyWatched })

        return get().recentlyWatched
    },
}))

export default useRecentlyWatchedStore
