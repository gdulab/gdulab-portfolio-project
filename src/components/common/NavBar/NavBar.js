import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss"


const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.titleBox}>
                <Link className={styles.title} to='/'><h1 >GduLAB</h1></Link>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><NavLink className={styles.link} to='/'>Home</NavLink></li>
                    <li><NavLink className={styles.link} to='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink className={styles.link} to='/'>About me</NavLink></li>
                    <li><NavLink className={styles.link} to='/'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;