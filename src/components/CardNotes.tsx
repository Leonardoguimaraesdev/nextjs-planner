import { useState } from 'react'
import styles from '../styles/CardNotes.module.scss'

export default function CardNotes() {

    const [note, setNote] = useState('')

    return (
        <section className={styles.cardNotesContainer}>
            <section className={styles.notes}><p>Notes</p></section>
            <section className={styles.spaceToWrite}>
                <textarea placeholder='Escreva aqui observações' value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            </section>
        </section>
    )
}