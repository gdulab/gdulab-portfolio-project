import styles from './Hero.module.scss'


//icons
import html5icon from "../../../icons/html-5.png"
import css3icon from "../../../icons/css-3.png"
import bootstrapicon from "../../../icons/bootstrap.png"
import jsicon from "../../../icons/js.png"
import reacticon from "../../../icons/react.png"
import linkedinicon from "../../../icons/linkedin.png"
import githubicon from "../../../icons/github.png"


const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroLeft}>
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
            </div>
            <div className={styles.heroRight}>
                <div className={styles.photo}></div>
                <div className={styles.socials}>
                    <div className={styles.linksWrapper}>
                        <a href='https://www.linkedin.com/in/bart%C5%82omiej-gdula/'><img src={linkedinicon} alt="linkedin icon"></img></a>
                        <a href='https://github.com/gdulab'><img src={githubicon} alt="github icon"></img></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;