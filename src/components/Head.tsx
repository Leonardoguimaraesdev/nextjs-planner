import { useState } from 'react'
import styles from '../styles/Head.module.scss'
import Logout from '../components/Logout'


interface HeadProps {
    addNewTask: (week: string, task: string) => void
}


export default function Head(props: HeadProps) {

    const [inputTask, setInputTask] = useState<string>('')
    const [inputWeek, setInputWeek] = useState<string>('')

    const sendToPlanner = () => {
        props.addNewTask(inputWeek, inputTask)
        setInputTask('')
        setInputWeek('')
    }

    console.log(inputWeek)
    return (
        <div className={styles.head}>
            <h1>Planner Semanal</h1>
            <Logout />
            <input maxLength={35} placeholder='Tarefa' value={inputTask} onChange={(e) => setInputTask(e.target.value)}></input>
            <select placeholder='Dia' value={inputWeek} onChange={(e) => setInputWeek(e.target.value)}>
                <option value="">Selecione uma opção</option>
                <option value="Segunda">Segunda</option>
                <option value="Terça">Terça</option>
                <option value="Quarta">Quarta</option>
                <option value="Quinta">Quinta</option>
                <option value="Sexta">Sexta</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </select>
            <button onClick={() => sendToPlanner()}>Enviar</button>
        </div>
    )
}