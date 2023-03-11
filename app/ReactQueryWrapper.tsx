'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useEffect } from 'react'
import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'

const queryClient = new QueryClient()
interface Props {
    children: React.ReactNode
}

const ReactQueryWrapper = ({ children }: Props) => {
    const loadRecentlyWatchedFromLocalStore = useRecentlyWatchedStore(
        (state) => state.loadRecentlyWatchedFromLocalStore
    )
    useEffect(() => {
        console.log('Вызываем проверку состояния')
        loadRecentlyWatchedFromLocalStore()
    }, [])
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryWrapper
