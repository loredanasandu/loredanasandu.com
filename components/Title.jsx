import Link from 'next/link'

const Title = () => {
    return (
        <nav>
            <Link href='/' style={{ textDecoration: 'none', color:'black' }} passHref>
                <h1 className='title'>Loredana Sandu</h1>
            </Link>
        </nav>
    )
}

export default Title