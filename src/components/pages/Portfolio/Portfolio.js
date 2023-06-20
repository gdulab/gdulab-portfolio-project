import { useSelector } from 'react-redux';
import styles from './Portfolio.module.scss'
import { motion } from 'framer-motion';
import { getAllProjects } from '../../../redux/projectSlice';

const Portfolio = () => {
    const projects = useSelector(state => getAllProjects(state));
    console.log(projects);
    return (
        <motion.div className={styles.portfolioWrapper}
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.2 }}>
            <h2>Portfolio</h2>
            {projects.map}
        </motion.div>
    )
}

export default Portfolio;