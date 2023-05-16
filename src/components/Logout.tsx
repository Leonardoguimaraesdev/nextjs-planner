import styles from '../styles/Logout.module.scss'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Input() {

    const router = useRouter()

    const logout = () => {
        Cookies.remove('email')
        Cookies.remove('name')

        router.push('/login')
    }

    return (
            <svg className={styles.exit} onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
    )
}