import { useState } from 'react'
import styles from '../styles/CardNotes.module.scss'

export default function CardNotes() {

    const [note, setNote] = useState('')

    return (
        <div className={styles.cardNotesContainer}>
            <div className={styles.notes}>Notes</div>
            <div className={styles.spaceToWrite}>
                <textarea placeholder='Escreva aqui observações' value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            </div>
        </div>
    )
}