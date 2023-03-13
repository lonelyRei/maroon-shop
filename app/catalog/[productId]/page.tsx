'use client'
import { useEffect } from 'react'
import useRecentlyWatchedStore from '@/src/stores/recentlyWatchedStore'
import { useQuery } from 'react-query'
import ProductsAPI from '@/src/API/productsAPI'
import styles from './page.module.css'
import { CurrentProduct } from '@/src/components/currentProduct/CurrentProduct'
import RecentlyWatched from '@/src/components/recentlyWatched/RecentlyWatched'

// Компонент, отображаемый по маршруту '/catalog/[productId]'
const Page = ({ params: { productId } }: IParams) => {
    // Метод для добавления товара в недавно просмотренные
    const addRecentlyWatched = useRecentlyWatchedStore((state) => state.addRecentlyWatched)

    // Делаем запрос на бэк
    const { isSuccess, data, isLoading, isError } = useQuery(['fetchProduct: ', productId], () =>
        ProductsAPI.fetchProduct(productId)
    )

    // При завершении запроса на бэк добавляем товар в недавно просмотренные
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

// Параметры
interface IParams {
    params: {
        // Идентификатор товара
        productId: string
    }
}

export default Page
