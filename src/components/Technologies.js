import Typography from "./Typography"
import styles from "../styles/Technologies.module.css"
import { technologiesData } from "../utils/data"

const Technologies = () => {
    return (
        <div>
            <Typography variant="h2" className={styles.heading}>
                Technologies I Use
            </Typography>
            {technologiesData.map((technology, index) => (
                <div key={index} className={styles.technologyDiv}>
                    <span className={styles.technologyIcon}> {technology.icon} </span>
                    <img src={technology.image} alt={technology.name} />
                    <Typography variant="p" className={styles.technologyName}>
                        {technology.name}
                    </Typography>
                </div>
            ))}
        </div>
    )
}

export default Technologies;
