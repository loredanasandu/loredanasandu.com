export default function Projects() {
  return (
    <div className='projects-body'>
      <div className='project-card'>
        <div className='project-type-date-container'>
          <div className='project-type'><span className='fa fa-link'></span>Website</div>
          <div>|</div>
          <div className='project-date'>November 2022</div>
        </div>
        <h2 className='project-title'>Personal website</h2>
        
        <p className='project-description'>A space to share my work and insights.</p>
        <div className='project-status'>
          <div><a href='https://www.loredanasandu.com'><span className='fa fa-external-link'></span>loredanasandu.com</a></div>
          <div><a href='https://github.com/loredanasandu/loredanasandu.com' target='_blank'><span className='fa fa-github'></span>source code</a></div>
        </div>
      </div>

      <div className='project-card'>
        <div className='project-type-date-container'>
          <div className='project-type'><span className='fa fa-link'></span>Research</div>
          <div>|</div>
          <div className='project-date'>November 2022</div>
        </div>
        <h2 className='project-title'>Quality of life in cities</h2>
        
        <p className='project-description'>Collecting data about the quality of life in different cities around the world, and visualizing it in a map.</p>
        {/*<p className='project-description'>A map to compare the quality of life in cities and urban areas around the world.</p> */}
        <div className='project-status'>
          <p>In progress...</p>
        </div>
      </div>
    </div>
  )
}