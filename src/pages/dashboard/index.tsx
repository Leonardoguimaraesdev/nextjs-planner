import Planner from '@/components/Planner'
import styles from '../../styles/DashBoard.module.scss'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

    const router = useRouter()

    useEffect(() => {
        const cookie = Cookies.get('email')

        if (!cookie) {
            router.push('/')
        }
    })

    return (
        <main className={styles.dashboard}>
            <Planner />
        </main>
    )
}
