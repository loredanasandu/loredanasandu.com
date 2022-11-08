import styles from '../../styles/Home.module.css'

const Description = ({text}) => {
    return (
        <p className={styles.description}>
            {text}
        </p>
    )
}

export default Description