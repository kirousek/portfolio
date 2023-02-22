import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <a className={styles.csLink} href="https://github.com/kirousek"><h2 className={styles.csText}>Coming Soon</h2></a>
        <div className={styles.container}>
            <h2 className={styles.contactText}>Contact</h2>
            <p className={styles.contactName}>Email: <a className={styles.contactLink} href="mailto:polynek@kirousek.eu">polynek@kirousek.eu</a></p>

        </div>
    </div>
  )
}
