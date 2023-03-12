import React from 'react'
import { IProductResponse } from '@/src/API/types'
import styles from './cardItem.module.css'
import Link from 'next/link'
import useCardStore from '@/src/stores/cardStore'
import { Button, Popover } from 'antd'

export const CardItem: React.FC<ICardItemProps> = ({ item }) => {
    const removeFromCard = useCardStore((state) => state.removeProductById)
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        removeFromCard(item.id)
    }
    return (
        <div className={styles.cardItem}>
            <Link href={`/catalog/${item.id}`} className={styles.cardImage}>
                <img src={item.image} alt="" className={styles.cardImageItem} />
            </Link>
            <div className={styles.cardItemInfo}>
                <div className={styles.cardItemInfoTop}>
                    <span className={styles.cardItemTitle}>{item.title}</span>
                    <span className={styles.cardItemCategory}>{item.category}</span>
                    <Popover placement="bottom" title={'Описание товара'} content={item.description} trigger="click">
                        <Button className={styles.description}>Описание</Button>
                    </Popover>
                </div>
                <div className={styles.cardItemInfoBottom}>
                    <span className={styles.cardItemPrice}>{item.price} ₽</span>
                    <button onClick={handleRemove} className={styles.remove + ' customButton'}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}

interface ICardItemProps {
    item: IProductResponse
}
