import Link from 'next/link'

const Title = () => {
    return (
        <nav>
            <Link href='/' passHref>
                <h1 className='title'>Loredana Sandu</h1>
            </Link>
        </nav>
    )
}

export default Title