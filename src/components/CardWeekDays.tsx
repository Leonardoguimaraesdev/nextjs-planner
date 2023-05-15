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
                    <li>{task}</li>
                    <button onClick={() => props.removeTask(props.day, i)}>X</button>
                </div>
            )
        })
    }

    return (
        <section className={styles.cardWeekDays}>
            <h2>{props.day}</h2>
            <ul className={styles.toDoList}>
                {renderizarTasks()}
            </ul>
        </section>
    )
}