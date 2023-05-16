import FormLogin from '@/components/FormLogin'
import styles from '@/styles/Login.module.scss'


export default function Login() {
    return (
        <main className={styles.login}>
            <FormLogin />
        </main>
    )
}
