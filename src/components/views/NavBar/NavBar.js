import styles from "./NavBar.module.scss"
const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.titlesBox}>
                <h1 className={styles.title}>GduLAB</h1>
            </div>
        </div>
    )
}

export default NavBar;