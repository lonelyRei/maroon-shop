import { useMemo } from 'react'
import { IProductResponse } from '@/src/API/types'
import { IFilterState } from '@/src/components/products/Products'

export const useFilteredProducts = (
    data: IProductResponse[] | undefined,
    filterState: IFilterState,
    isLoading: boolean
) => {
    return useMemo(() => {
        if (data && !isLoading) {
            return data.filter((product: IProductResponse): boolean => {
                return filterState.categories.includes(product.category)
            })
        }
        return []
    }, [filterState, isLoading])
}
