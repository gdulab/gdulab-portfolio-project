import { useSelector } from 'react-redux';
import styles from './Portfolio.module.scss'
import { motion } from 'framer-motion';
import PortfolioProject from '../../views/PortfolioProject/PortfolioProject';
import { getAllProjects } from '../../../redux/projectSlice';

const Portfolio = () => {
    const projects = useSelector(getAllProjects);

    return (
        <motion.div className={styles.portfolioWrapper}
            id='portfolio'
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.2 }}>
            <h2>Portfolio</h2>
            {
                projects.map(project => <PortfolioProject
                    key={project.id}
                    title={project.title}
                    description={project.description} />
                )
            }
        </motion.div>
    )
}

export default Portfolio;