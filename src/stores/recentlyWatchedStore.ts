import { create } from 'zustand'
import { IProductResponse } from '@/src/API/types'

const RECENTLY_WATCHED_PRODUCTS: string = 'RECENTLY_WATCHED_PRODUCTS'
interface IRecentlyWatchedStore {
    recentlyWatched: IProductResponse[]
    addRecentlyWatched: (product: IProductResponse) => void
    loadRecentlyWatchedFromLocalStore: () => IProductResponse[]
}

const useRecentlyWatchedStore = create<IRecentlyWatchedStore>((set, get) => ({
    recentlyWatched: [],
    addRecentlyWatched: (element: IProductResponse) => {
        set({
            recentlyWatched: [...get().recentlyWatched.filter((mapElement) => mapElement.id !== element.id), element],
        })
        localStorage.setItem(RECENTLY_WATCHED_PRODUCTS, JSON.stringify(get().recentlyWatched))
    },
    loadRecentlyWatchedFromLocalStore: () => {
        localStorage.getItem(RECENTLY_WATCHED_PRODUCTS)
            ? set({
                  recentlyWatched: JSON.parse(localStorage.getItem(RECENTLY_WATCHED_PRODUCTS)!),
              })
            : set({ recentlyWatched: get().recentlyWatched })

        return get().recentlyWatched
    },
}))

export default useRecentlyWatchedStore
