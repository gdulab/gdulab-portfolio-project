import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss"
import { Link } from "react-scroll";
import { useState } from "react";



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.NavBar} id="navbar">
            <div className={styles.titleBox}>
                <NavLink className={styles.title} to='/'><h1 >GduLAB</h1></NavLink>
            </div>
            <div
                className={styles.menuButton}
                onClick={() => setIsOpen(!isOpen)}>
                <i className="fa fa-bars"></i>
            </div>
            <div className={styles.desktopNav}>
                <ul>
                    <li><Link className={styles.link} to='/' spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link className={styles.link} to='portfolio' spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                    <li><Link className={styles.link} to='aboutMe' spy={true} smooth={true} duration={500}>About me</Link></li>
                    <li><Link className={styles.link} to='contact' spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar;