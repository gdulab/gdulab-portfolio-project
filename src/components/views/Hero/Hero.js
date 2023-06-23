import styles from './Hero.module.scss';
import { motion } from 'framer-motion';


//icons
import html5icon from '../../../icons/html-5.png';
import css3icon from '../../../icons/css-3.png';
import bootstrapicon from '../../../icons/bootstrap.png';
import jsicon from '../../../icons/js.png';
import reacticon from '../../../icons/react.png';
import linkedinicon from '../../../icons/linkedin.png';
import githubicon from '../../../icons/github.png';
import emailicon from '../../../icons/email.png'



const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <motion.div className={styles.heroLeft}
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}>
                <div className={styles.heroLeftContentWrapper}>
                    <div className={styles.heroText}>
                        <h2 className={styles.hello}>Hello!</h2>
                        <h2>I'm Bartłomiej Gdula.</h2>
                        <p>I am a Front-end Developer with a passion for new technologies. I'm focusing on continuous development and improving my skills. In my work, I put a lot of effort on creating high quality software that meets users' expectations.
                        </p>
                    </div>
                    <div className={styles.techStack}>
                        <img src={html5icon} alt='HTML5 icon'></img>
                        <img src={css3icon} alt='css3 icon'></img>
                        <img src={bootstrapicon} alt='bootstrap icon'></img>
                        <img src={jsicon} alt='js icon'></img>
                        <img src={reacticon} alt='react icon'></img>
                    </div>
                </div>
            </motion.div>
            <div className={styles.heroRight}>
                <motion.div className={styles.photo}
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.5, delay: 0.4 }}>
                </motion.div>
                <motion.div className={styles.socials}
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'tween', duration: 0.5, delay: 0.3 }}>
                    <div className={styles.linksWrapper}>
                        <div className={styles.socialLink}>
                            <img src={emailicon} alt='Email icon' onClick={() => {
                                navigator.clipboard.writeText('gdula.bartlomiej@gmail.com');
                                alert('E-mail adress copied to your clipboard.')
                            }}></img>
                        </div>
                        <div className={styles.socialLink}>
                            <a href='https://www.linkedin.com/in/bart%C5%82omiej-gdula/' target='_blank' rel='noreferrer'><img src={linkedinicon} alt='linkedin icon'></img></a>
                        </div>
                        <div className={styles.socialLink}>
                            <a href='https://github.com/gdulab' target='_blank' rel='noreferrer'><img src={githubicon} alt='github icon'></img></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default Hero;