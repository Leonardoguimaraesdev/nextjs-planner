import { useState } from "react";
import styles from '../styles/Form.module.scss'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string()
        .required('O e-mail é obrigatório')
        .email('Deve ser um e-mail válido'),
    password: yup.string()
        .required('A senha é obrigatória')
        .matches(/(?=.*[0-9])/, 'A senha deve conter pelo menos um número')
        .matches(/(?=.*[!@#$%^&*])/, 'A senha deve conter pelo menos um símbolo')
        .matches(/(?=.*[A-Z])/, 'A senha deve conter pelo menos uma letra maiúscula')
        .min(8, 'A senha deve conter no mínimo 8 caracteres'),
});

type FormData = {
    email: string
    password: string;
};

export default function Input() {
    
    const router = useRouter()

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const [checkPassword, setCheckPassword] = useState<any>('')

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {

        if (password !== confirmPassword) {
            const dif = <p>As senhas precisam ser iguais</p>
            setCheckPassword(dif)
        } else {
            Cookies.set('name', name)
            Cookies.set('email', email)
            router.push('/')

        }
    };

    return (
        <section className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className={styles.registerTittle}>Cadastrar</h1>
                <input
                    type="name"
                    value={name}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    {...register('email')}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <input
                    type="password"
                    {...register('password')}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Sua senha"
                />
                {checkPassword}
                <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirme a sua senha"
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
                <h4>
                    Caso já tenha uma conta
                    <Link href="/">
                        <b> Clique Aqui</b>
                    </Link>
                </h4>
            </form>
        </section>
    )
}