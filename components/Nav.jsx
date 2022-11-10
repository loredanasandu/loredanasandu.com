import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='topnav'>
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