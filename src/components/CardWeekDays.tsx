import styles from '../styles/CardWeekDays.module.scss'

interface CardWeekDaysProps {
    day: string
    tasks: string[]
    removeTask: (week: string, taskIndex: number) => void
}

export default function CardWeekDays(props: CardWeekDaysProps) {


    const renderizarTasks = () => {
        const tasks = props.tasks

        return tasks.map((task, i) => {
            return (
                <div className={styles.task} key={i}>
                    <h2>{task}</h2>
                    <button onClick={() => props.removeTask(props.day, i)}>X</button>
                </div>
            )
        })
    }

    return (
        <div className={styles.cardWeekDays}>
            <h1>{props.day}</h1>
            <div className={styles.toDoList}>
                {renderizarTasks()}
            </div>
        </div>
    )
}