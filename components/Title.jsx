import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Title = () => {
    return (
        <nav>
            <Link href='/' style={{ textDecoration: 'none', color:'black' }} passHref>
                <h1 className={styles.title}>Loredana Sandu</h1>
            </Link>
        </nav>
    )
}

export default Title