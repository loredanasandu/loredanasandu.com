import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Nav = () => {
    return (
        <nav className={styles.topnav}>
            <div>
                <Link href='/' passHref>Articles</Link>
                <Link href='/projects' passHref>Projects</Link>
                <Link href='/notes' passHref>Notes</Link>
                <Link href='/about' passHref>About</Link>
            </div>
        </nav>
    )
}

export default Nav