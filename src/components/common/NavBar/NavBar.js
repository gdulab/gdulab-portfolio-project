import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss"
import { Link } from "react-scroll";


const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.titleBox}>
                <NavLink className={styles.title} to='/'><h1 >GduLAB</h1></NavLink>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><Link className={styles.link} to='/' spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link className={styles.link} to='portfolio' spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                    <li><Link className={styles.link} to='aboutMe' spy={true} smooth={true} duration={500}>About me</Link></li>
                    <li><Link className={styles.link} to='/'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;