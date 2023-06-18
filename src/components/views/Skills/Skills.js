import styles from "./Skills.module.scss"
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <div className={styles.skillsWrapper}>
            <motion.div className={styles.skillsImage}
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", duration: 0.5, delay: 1 }}
            >
            </motion.div>
            <motion.div className={styles.skillsText}
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", duration: 0.5, delay: 1 }}>
                <div className={styles.skillsHeader}>
                    <h2>My skills</h2>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills;