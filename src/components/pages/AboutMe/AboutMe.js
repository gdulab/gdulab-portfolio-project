import styles from './AboutMe.module.scss'
import { motion } from 'framer-motion';

//pictures
import instagramIcon from '../../../icons/instagram.png'
import youTubeIcon from '../../../icons/youtube.png'
import githubIcon from '../../../icons/github.png'

const AboutMe = () => {
    return (
        <motion.div className={styles.aboutMeWrapper}
            id="aboutMe"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.2 }}>
            <h2>About me</h2>
            <div className={styles.description}>
                <p>Hello! I'm Bartłomiej Gdula, a Frontend Developer. My passion for programming began at the age of 14 when I had my first encounter with this fascinating world. I started my career working as an IT support, where I gained valuable experience in troubleshooting technical issues and assisting users.</p>
                <p>Over time, my dedication and skills were recognized, leading to a promotion as a project coordinator. However, as I observed the work of programmers around me, I realized that the process of software development truly captivated me, and I decided to fully immerse myself in this field.</p>
                <p>Apart from the world of technology, I indulge in the passion of music creation. I sing and play the guitar, piano, and bass guitar. Music serves as a unique way for me to express emotions and unwind after a busy day of work.</p>
                <p>During my free time, I also enjoy diving into the realm of board games, which provide me with entertainment and joy in the company of friends. Additionally, I explore the amazing universe of World of Warcraft, where I can immerse myself in adventures and encounter fantastic creatures within the game's universe.</p>
                <p>On this website, you'll find my programming portfolio and samples of my musical creations. I encourage you to explore my work and join me in discovering the countless possibilities offered by the worlds of programming and music.</p>
                <p>If you have any questions or would like to collaborate, feel free to get in touch. I look forward to sharing my passion and creating something exceptional together!</p>
            </div>
            <div className={styles.linksWrapper}>
                <div className={styles.links}>
                <a className={styles.link} href="https://github.com/gdulab" target='_blank' rel='noreferrer'><img src={githubIcon} alt="github icon"></img><span>my github</span></a>
                    <a className={styles.link} href="https://www.youtube.com/channel/UChP8CqJi-fYEFh4_BtRtP5A" target='_blank' rel='noreferrer'><img src={youTubeIcon} alt="YouTube icon"></img><span>my music channel</span></a>
                    <a className={styles.link} href="https://www.youtube.com/channel/UCWEORIQI9PaiSvrnUKjZwcg" target='_blank' rel='noreferrer'><img src={youTubeIcon} alt="YouTube icon"></img><span>my gaming channel</span></a>
                    <a className={styles.link} href="https://www.instagram.com/bgdula/" target='_blank' rel='noreferrer'><img src={instagramIcon} alt="Insagram icon"></img><span>my instagram</span></a>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe;