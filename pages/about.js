import Link from 'next/link'

export default function About() {
  return (
    <div className='about-body'>
      {/*<p>
        Born in Moldova, I moved to Spain at a very early age, and grew 
        up there.
      </p>*/}
      
      <p>
        I build stuff with a fair amount of coding, ask myself questions out of curiosity and 
        answer them with data. At the same time, I'm studying Mathematics in Vienna, focusing mainly on 
        Quantum Information, Complex Networks and Biomathematics. 

        {/* I'm currently studying Mathematics in Vienna, focusing mainly on 
        Quantum Information, Complex Networks and Biomathematics. 
        At the same time, I'm also building stuff with a fair amount of coding, asking myself 
        questions out of curiosity and answering them with data. */}
      </p>

      <p>
        I devote time to listening to people, reading about others' insights, 
        getting to know new places, armchair philosophy, writing, discovering new art, classical music, 
        spending time with nature, biographies, philosophical novels, insightful conversations, 
        great coffee, and even greater tea. Throughout my lifetime, I've learnt and continue 
        learning voraciously about a broad range of topics including economy, contemporary history, 
        biology, ancient Greek and Roman culture, law (and especially Roman law), esperanto, 
        philosophy, human behaviour, physics and artificial intelligence.
      </p>

      <p>
        I seek to continue exercising my curiosity while discovering and building new things. 
        Also, develop my focus on things that are worth it, and surround myself with constructive people 
        and environments.
      </p>

      <p>
        Born in Moldova, I moved to Spain at a very early age, and grew 
        up there.
      </p>

      <p>Get in touch with me:</p>

      <nav className='about-links'>
          <div>
              <Link href='https://github.com/loredanasandu' target='_blank' passHref className='fa fa-github-square'></Link>
              <Link href='https://www.linkedin.com/in/loredana-sandu/' target='_blank' passHref className='fa fa-linkedin-square'></Link>
              <Link href='mailto:loredana@loredanasandu.com' passHref target='_blank' className='fa fa-envelope-square'></Link>
          </div>
      </nav>
    </div>
  )
}