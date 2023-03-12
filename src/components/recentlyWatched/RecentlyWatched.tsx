'use client'

import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'
import styles from './RecentlyWatched.module.css'
import RecentlyWatchedInner from '@/src/components/recentlyWatched/recentlyWatchedInner'
import React from 'react'

const RecentlyWatched: React.FC<IRecentlyWatched> = ({ title }: IRecentlyWatched) => {
    const recentlyWatched = useRecentlyWatchedStore((store) => store.recentlyWatched)

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
