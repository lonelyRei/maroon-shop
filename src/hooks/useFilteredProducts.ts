import { useMemo } from 'react'
import { IProductResponse } from '@/src/API/types'
import { IFilterState } from '@/src/components/products/Products'

// Кастомный хук для фильтрации товаров
export const useFilteredProducts = (
    data: IProductResponse[] | undefined,
    filterState: IFilterState,
    isLoading: boolean
) => {
    return useMemo(() => {
        // Если пришли данные и загрузка закончена
        if (data && !isLoading) {
            // Возвращаем отфильтрованный (по категориям) массив товаров
            return data.filter((product: IProductResponse): boolean => {
                return filterState.categories.includes(product.category)
            })
        }
        // Если data - undefined или загрузка не завершена => возвращаем пустой список
        return []
    }, [filterState, isLoading]) // Следим за состоянием фильтра и состоянием загрузки
}
