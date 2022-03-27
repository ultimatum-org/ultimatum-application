import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={styles.title}>
            <span>Next JS</span> Test
        </h1>
        <p className={styles.description}>Make awesome web applications with Next JS</p>
    </div>
  )
}

export default Header