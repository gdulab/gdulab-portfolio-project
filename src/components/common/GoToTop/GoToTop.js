import styles from './GoToTop.module.scss'
import { Link } from "react-scroll";

const GoToTop = () => {

    return (
        <div className={styles.goToTop}>
            <Link to='navbar' spy={true} smooth={true} duration={500}><button><i className="fa fa-angle-up"></i></button></Link>
        </div>
    );
}

export default GoToTop;