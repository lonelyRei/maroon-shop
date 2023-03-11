'use client'

import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'
import styles from './RecentlyWatched.module.css'
import RecentlyWatchedInner from '@/src/components/recentlyWatched/recentlyWatchedInner'
import React, { useEffect, useState } from 'react'
import { IProductResponse } from '@/src/API/types'

const RecentlyWatched: React.FC<IRecentlyWatched> = ({ title }: IRecentlyWatched) => {
    const loadRecentlyWatchedFromLocalStore = useRecentlyWatchedStore(
        (state) => state.loadRecentlyWatchedFromLocalStore
    )

    const [recentlyWatched, setRecentlyWatched] = useState<IProductResponse[]>([])

    useEffect(() => {
        setRecentlyWatched(loadRecentlyWatchedFromLocalStore())
    }, [])

    return (
        <div className={styles.recently}>
            <div className="container">
                <h3 className={styles.recentlyTitle + ' blockTitle'}>{title}</h3>
                <RecentlyWatchedInner recentlyWatched={recentlyWatched} />
            </div>
        </div>
    )
}

interface IRecentlyWatched {
    title: string
}

export default RecentlyWatched
