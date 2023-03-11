import { Products } from '@/src/components/products/Products'
import { Follow } from '@/src/components/follow/follow'
import RecentlyWatched from '@/src/components/recentlyWatched/RecentlyWatched'
import { Contacts } from '@/src/components/contacts/Contacts'

export default function MainPage() {
    return (
        <div>
            <Products />
            <RecentlyWatched title={'Вы недавно смотрели'} />
            <Follow />
            <Contacts />
        </div>
    )
}
