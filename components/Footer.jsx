import Link from 'next/link'

const Footer = () => {
    return (
        <div class='footer-and-copyright'>
            <div class='footer'>
                <div>
                    <nav className='footer-links'>
                        <Link href='https://github.com/loredanasandu' passHref className='fa fa-github-square'></Link>
                        <Link href='https://www.linkedin.com/in/loredana-sandu/' passHref className='fa fa-linkedin-square'></Link>
                    </nav>
                </div>
                <div className='say-hello'>
                    <h2>Say hello.</h2>
                    <Link href='/' passHref >loredanasandu.build@gmail.com</Link>
                </div>
            </div>
            <div class='copyright'>
                <p>© Loredana Sandu 2022</p>
            </div>
        </div>
    )
}

export default Footer