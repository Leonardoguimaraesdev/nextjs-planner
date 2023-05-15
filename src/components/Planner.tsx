import { useEffect, useState } from 'react'
import styles from '../styles/Planner.module.scss'
import Body from './Body'
import Head from './Head'

export default function Input() {

    const [newTask, setNewTask] = useState<string>('')
    const [addInWeek, setAddInWeek] = useState<string>('')

    useEffect(() => {
        setNewTask('')
        setAddInWeek('')
    }, [])

    const addNewTask = (week:string, task:string) => {
        setNewTask(task)
        setAddInWeek(week)

    }

    return (
        <section className={styles.planner}>
            <Head addNewTask={addNewTask}/>
            <Body newTask={newTask} addInWeek={addInWeek}/>
        </section>
    )
}