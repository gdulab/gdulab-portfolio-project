import styles from './Hero.module.scss';
import { motion } from 'framer-motion';


//icons
import html5icon from "../../../icons/html-5.png";
import css3icon from "../../../icons/css-3.png";
import bootstrapicon from "../../../icons/bootstrap.png";
import jsicon from "../../../icons/js.png";
import reacticon from "../../../icons/react.png";
import linkedinicon from "../../../icons/linkedin.png";
import githubicon from "../../../icons/github.png";



const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <motion.div className={styles.heroLeft}
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
            >
                <div className={styles.heroLeftContentWrapper}>
                    <div className={styles.heroText}>
                        <h2 className={styles.hello}>Cześć!</h2>
                        <h2>Jestem Bartłomiej Gdula.</h2>
                        <p>Jestem Front-end Developerem z pasją do nowych
                            technologii. Stawiam na ciągły rozwój i
                            doskonalenie swoich umiejętności. W mojej pracy
                            kładę duży nacisk na tworzenie oprogramowania
                            o wysokiej jakości, które spełnia oczekiwania
                            użytkowników.
                        </p>
                    </div>
                    <div className={styles.techStack}>
                        <img src={html5icon} alt="HTML5 icon"></img>
                        <img src={css3icon} alt="css3 icon"></img>
                        <img src={bootstrapicon} alt="bootstrap icon"></img>
                        <img src={jsicon} alt="js icon"></img>
                        <img src={reacticon} alt="react icon"></img>
                    </div>
                </div>
            </motion.div>
            <div className={styles.heroRight}>
                <motion.div className={styles.photo}
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 0.5, delay: 0.2 }}>
                </motion.div>
                <motion.div className={styles.socials}
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "tween", duration: 0.5, delay: 0.3 }}>
                    <div className={styles.linksWrapper}>
                        <a href='https://www.linkedin.com/in/bart%C5%82omiej-gdula/'><img src={linkedinicon} alt="linkedin icon"></img></a>
                        <a href='https://github.com/gdulab'><img src={githubicon} alt="github icon"></img></a>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default Hero;