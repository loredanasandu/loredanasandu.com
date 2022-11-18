import Link from 'next/link'

const Footer = () => {
    return (
        <div className='footer-and-copyright'>
            <div className='footer'>
                <div>
                    <nav className='footer-links'>
                        <Link href='https://github.com/loredanasandu' passHref target='_blank' className='fa fa-github-square'></Link>
                        <Link href='https://www.linkedin.com/in/loredana-sandu/' passHref target='_blank' className='fa fa-linkedin-square'></Link>
                    </nav>
                </div>
                <div className='say-hello'>
                    <h2>Say hello.</h2>
                    <Link href='mailto:loredana@loredanasandu.com' target='_blank' passHref >loredana@loredanasandu.com</Link>
                </div>
            </div>
            <div className='copyright'>
                <p>© 2022 <a href='/about'>Loredana Sandu</a></p>
                {/* <p>© <a href='/about'>Loredana Sandu</a> 2022 | <a href='/colophon'>Colophon</a> | <a href='/acknowledgements'>Acknowledgements</a></p> */}
            </div>
        </div>
    )
}

export default Footer