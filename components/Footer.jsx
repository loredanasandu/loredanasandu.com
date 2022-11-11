import Link from 'next/link'

const Footer = () => {
    return (
        <div class='footer-and-copyright'>
            <div class='footer'>
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
            <div class='copyright'>
                <p>© 2022 <a href='/about'>Loredana Sandu</a> | <a href='https://wiki.loredanasandu.com' target='_blank'>Loredana's Wiki</a></p>
                {/* <p>© <a href='/about'>Loredana Sandu</a> 2022 | <a href='/colophon'>Colophon</a> | <a href='/acknowledgements'>Acknowledgements</a> | <a href='https://www.wiki.loredanasandu.com/'>Loredana's Wiki</a></p> */}
            </div>
        </div>
    )
}

export default Footer