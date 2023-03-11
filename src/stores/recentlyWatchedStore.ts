import { create } from 'zustand'
import { IProductResponse } from '@/src/API/types'

const recentlyWatchedProducts: string = 'recentlyWatchedProducts'
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
        localStorage.setItem(recentlyWatchedProducts, JSON.stringify(get().recentlyWatched))
    },
    loadRecentlyWatchedFromLocalStore: () => {
        localStorage.getItem(recentlyWatchedProducts)
            ? set({
                  recentlyWatched: JSON.parse(localStorage.getItem(recentlyWatchedProducts)!),
              })
            : set({ recentlyWatched: get().recentlyWatched })

        return get().recentlyWatched
    },
}))

export default useRecentlyWatchedStore
