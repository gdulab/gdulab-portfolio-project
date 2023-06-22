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
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.8 }}>
            <h2>Portfolio</h2>
            {
                projects.map(project => <PortfolioProject
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    created={project.created}
                    image={project.image} 
                    link={project.link} 
                    github={project.github} 
                    tech={project.tech}/>
                )
            }
        </motion.div>
    )
}

export default Portfolio;