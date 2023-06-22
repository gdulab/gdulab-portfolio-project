import styles from './PortfolioProject.module.scss'

import pizzeria from '../../../images/pizzeria.png';
import shopapp from '../../../images/shopapp.png';
import stopwatch from '../../../images/stopwatch.png';
import todolist from '../../../images/todolist.png';

const PortfolioProject = (props) => {
    let image = '';

    // this part is absolutly aweful, but rn I dont have better idea...
    if (props.image === "pizzeria") {
        image = pizzeria;
    } else if ( props.image === "shopapp") {
        image = shopapp;
    } else if ( props.image === "stopwatch") {
        image = stopwatch;
    } else if (props.image === "todolist") {
        image = todolist;
    }

    return (
        <div className={styles.portfolioProjectWrapper}>
            <h3>{props.title}</h3>
            <div className={styles.portfolioProjectInnerWrapper}>
                <div className={styles.projectDescription}>
                    <p>{props.description}</p>
                    <p><span>Used technologies:</span> {props.tech}</p>
                    <p className={styles.createdInfo}>{props.created}</p>
                    
                </div>
                <div className={styles.projectDetails}>
                    <div className={styles.projectImage}>
                        <img src={image} alt={`${props.title} project`}></img>
                    </div>
                    <div className={styles.projectLinks}>
                        <a href={props.link} target='_blank' rel='noreferrer'>Live app</a>
                        <a href={props.github} target='_blank' rel='noreferrer'>Github</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PortfolioProject;