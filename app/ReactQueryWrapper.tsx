'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useEffect } from 'react'
import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'
import useCartStore from '@/src/stores/cartStore'

// Создаем новый экземпляр react Query
const queryClient = new QueryClient()

// Пропсы компонента
interface Props {
    children: React.ReactNode
}

// Обертка для возможности взаимодействия с ReactQuery во всех компонентах приложения
const ReactQueryWrapper = ({ children }: Props) => {
    // Метод для загрузки недавно просмотренных из locale storage
    const loadRecentlyWatchedFromLocalStore = useRecentlyWatchedStore(
        (state) => state.loadRecentlyWatchedFromLocalStore
    )

    // Метод для загрузки данных корзины из locale storage
    const loadProductsFromLocalStorage = useCartStore((state) => state.loadProductsFromLocalStorage)

    // При монтировании компонента загружаем данные из locale storage
    useEffect(() => {
        // Загружаем недавно просмотренные посты из locale storage
        loadRecentlyWatchedFromLocalStore()

        // Загружаем товары из корзины из locale storage
        loadProductsFromLocalStorage()
    }, [])

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryWrapper
