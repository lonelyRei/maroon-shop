'use client'
import { useEffect } from 'react'
import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'
import { useQuery } from 'react-query'
import ProductsAPI from '@/src/API/productsAPI'
import styles from './page.module.css'
import { CurrentProduct } from '@/src/components/currentProduct/CurrentProduct'
import RecentlyWatched from '@/src/components/recentlyWatched/RecentlyWatched'

const Page = ({ params: { productId } }: IParams) => {
    const addRecentlyWatched = useRecentlyWatchedStore((state) => state.addRecentlyWatched)

    const { isSuccess, data, isLoading, isError } = useQuery(['fetchProduct: ', productId], () =>
        ProductsAPI.fetchProduct(productId)
    )

    useEffect(() => {
        if (data) addRecentlyWatched(data)
    }, [isLoading])

    return (
        <div className={styles.currentProduct}>
            <CurrentProduct isSuccess={isSuccess} isLoading={isLoading} isError={isError} data={data} />
            <RecentlyWatched title={'Вам также может понравиться'} />
        </div>
    )
}

interface IParams {
    params: {
        productId: string
    }
}

export default Page
