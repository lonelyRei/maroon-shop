'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useEffect } from 'react'
import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'
import useCardStore from '@/src/stores/cardStore'

const queryClient = new QueryClient()
interface Props {
    children: React.ReactNode
}

const ReactQueryWrapper = ({ children }: Props) => {
    const loadRecentlyWatchedFromLocalStore = useRecentlyWatchedStore(
        (state) => state.loadRecentlyWatchedFromLocalStore
    )
    const loadProductsFromLocalStorage = useCardStore((state) => state.loadProductsFromLocalStorage)

    useEffect(() => {
        loadRecentlyWatchedFromLocalStore()
        loadProductsFromLocalStorage()
    }, [])

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryWrapper
