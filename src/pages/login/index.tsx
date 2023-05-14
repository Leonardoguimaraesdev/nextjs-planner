import FormLogin from '@/components/FormLogin'
import styles from '@/styles/Login.module.scss'


export default function Login() {
    return (
        <div className={styles.login}>
            <FormLogin />
        </div>
    )
}
