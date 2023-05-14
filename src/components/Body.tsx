import { useEffect, useState } from 'react'
import styles from '../styles/Body.module.scss'
import CardNotes from './CardNotes'
import CardWeekDays from './CardWeekDays'

interface BodyProps {
    newTask: string
    addInWeek: string
}

export default function Body(props: BodyProps) {

    const [listOfTasks, setListOfTasks] = useState<{ task: string[], week: string }[]>([])
    const [note, setNote] = useState<string>('')

    useEffect(() => {

        const tasks = async () => {
            const response = await fetch('/api/tasks')
            const data = await response.json()
            setListOfTasks(data)
        }

        tasks()
    }, [])

    useEffect(() => {

        const tasks = async () => {
            const response = await fetch('/api/text')
            const data = await response.json()
            setNote(data)
        }

        tasks()
    }, [])

    useEffect(() => {
        if (props.newTask && props.addInWeek !== '') {
            setListOfTasks(prevTasks =>
                prevTasks.map(item =>
                    item.week === props.addInWeek
                        ? { ...item, task: [...item.task, props.newTask] }
                        : item
                )
            )
        }
    }, [props.newTask, props.addInWeek])


    const removeTask = (week: string, taskIndex: number) => {
        setListOfTasks(prevTasks =>
            prevTasks.map(item =>
                item.week === week
                    ? { ...item, task: item.task.filter((_, i) => i !== taskIndex) }
                    : item
            )
        )
    }

    const renderizarTasks = () => {
        return (
            listOfTasks.map((listTask, i) => {
                return (
                    <CardWeekDays key={i} day={listTask.week} tasks={listTask.task} removeTask={removeTask} />
                )
            })
        )

    }

    return (
        <div className={styles.body}>
            {renderizarTasks()}
            <CardNotes/>
        </div>
    )
}