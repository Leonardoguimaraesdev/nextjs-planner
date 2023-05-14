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
        <button className={styles.btnLogout} onClick={logout}>LOGOUT</button>
    )
}