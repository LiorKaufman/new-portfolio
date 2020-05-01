import React from 'react';

const ProjectGlassTrack = () => {
  return (
    <div>
      <div className='project'>
        <div className='project-img'>
          <h3>GlassTrack</h3>
          <div>
            <img
              src='images/portfolio/glass.png'
              alt={`Project Thumbnail`}
              className='img-fit'
            />
          </div>
          <div className='project-options'>
            <a
              className='m-2'
              href='https://guarded-garden-91447.herokuapp.com/users/sign_in'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-desktop m-1 link'></i>
              <span className='link'>Live Preview</span>
            </a>
            <a
              className='m-2'
              href='https://github.com/ugly-and-proud/glasstrack'
              target='__blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-code-branch m-1 ml-2 link'></i>
              <span className='link'>View Source</span>
            </a>

            <p className='my-2 ml-2 mr-2'>
              This app is hosted on a
              <span className='highlight'> Heroku Free Dyno Plan</span>, meaning
              that on the initial load, the server may need to start which can
              cause <span className='highlight'>15-20 seconds of delay</span>.
              Thank you.
            </p>
            <ul
              style={{
                listStyle: 'none',
              }}
            >
              <li>
                <h5>
                  In order to use the app you need to be
                  <span className='highlight'> signed in</span>
                </h5>
              </li>
              <li>
                <span className='highlight'> Username: </span>
                manager@glasstrack.com
              </li>
              <li>
                <span className='highlight'> Password: </span> manager
              </li>
            </ul>
          </div>
        </div>
        <div className='project-desc'>
          <h4>Overview</h4>
          <p>
            <span className='highlight'> GlassTrack</span> is an application
            that enables bar and restaurant managers to easily track and manage
            their alchohol inventory and sales. It not only helps them keep
            appropriate inventory stocks, but also to track each
            <span className='highlight'> individual glass</span> to make sure
            there are no discrepancies between
            <span className='highlight'> sales </span> and daily inventory
            counts. My final project during{' '}
            <span className='highlight'> LEARN academy coding bootcamp </span>
          </p>
        </div>
        <div className='project-tech'>
          <h4>Technologies Used</h4>
          <ul className='tech-list'>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>ReactJS</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>Ruby on Rails</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>Bootstrap</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>HTML5</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>CSS3</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>PostegreSQL</p>
            </li>
          </ul>
        </div>
        <div className='project-features'>
          <h5>My Contributions</h5>
          <p>
            My primary role was to construct the
            <span className='highlight'> backend </span> of the application and
            to create the <span className='highlight'> algorithim </span> that
            enables proper calculation of and idividual glass sales. I also
            worked extensivly with the{' '}
            <a
              className='highlight'
              href='https://squareup.com/us/en'
              target='__blank'
              rel='noopener noreferrer'
            >
              SquareInvenotry external API
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectGlassTrack;
