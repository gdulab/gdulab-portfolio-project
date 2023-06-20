
import styles from "./Skills.module.scss"
import { motion } from 'framer-motion';




const Skills = () => {

    return (

            <motion.div className={styles.skillsWrapper}
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.5, delay: 0.8 }}>
                <div className={styles.skillsListWrapper}>
                    <div className={styles.skillsList}>
                        <h3>Tech skills</h3>
                        <ul>
                            <li>HTML5 + CSS3</li>
                            <li>Responsive Web Design</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React Router</li>
                            <li>React Redux</li>
                            <li>Ajax</li>
                            <li>Bootstrap</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                    <div className={styles.skillsList}>
                        <h3>Soft skills</h3>
                        <ul>
                            <li>Problem-solving thinking</li>
                            <li>Aesthetic sense</li>
                            <li>Interpersonal skills</li>
                            <li>Teamwork</li>
                            <li>Team management</li>
                            <li>Planning</li>
                        </ul>
                    </div>
                    <div className={styles.skillsList}>
                        <h3>Tools</h3>
                        <ul>
                            <li>Git</li>
                            <li>Jira</li>
                            <li>Confluence</li>
                            <li>Miro</li>
                            <li>Google Workspace</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
    )
}

export default Skills;