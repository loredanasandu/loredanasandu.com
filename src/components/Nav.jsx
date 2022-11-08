import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Nav = () => {
    return (
        <div>
            <Link href='/' passHref>
                <h2 className={styles.title}>Articles</h2>
            </Link>

            <Link href='/' passHref>
                <h2 className={styles.title}>About</h2>
            </Link>
        </div>
    )
}

export default Nav