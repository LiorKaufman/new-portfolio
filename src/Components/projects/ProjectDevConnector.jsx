import React from 'react';

const ProjectDevConnector = () => {
  return (
    <div>
      <div className='project'>
        <div className='project-img'>
          <h3>Dev Connector</h3>
          <div>
            <img
              src='images/portfolio/BrandLogo.png'
              alt='Project Thumbnail'
              className='img-fit'
            />
          </div>
          <div className='project-options'>
            <a
              className='m-2'
              href='https://devconnetorapp.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-desktop m-1 link'></i>
              <span className='link'>Live Preview</span>
            </a>
            <a
              className='m-2'
              href='https://github.com/LiorKaufman/devconnector'
              target='__blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-code-branch m-1 ml-2 link'></i>
              <span className='link'>View Source</span>
            </a>
            <p className='m-2'>
              This app is hosted on a
              <span className='highlight'> Heroku Free Dyno Plan</span>, meaning
              that on the initial load, the server may need to start which can
              cause <span className='highlight'>15-20 seconds of delay</span>.
              Thank you.
            </p>
          </div>
        </div>
        <div className='project-desc'>
          <h4>Overview</h4>
          <p>
            <span className='highlight'>DevConnector</span>
            is a fully functional social network app built using the
            <span className='highlight'>MERN </span>stack. Users can register
            and create their own
            <span className='highlight'> unique profile </span> to showcase
            their work experience. Not only that but users can also create posts
            and <span className='highlight'> comment and like </span> on other
            users posts!
          </p>
          <h5>Purpose of the App</h5>
          <p>
            I decided to built <span className='highlight'> DevConnector </span>{' '}
            to improve my backend skills with{' '}
            <span className='highlight'> Express.js </span>. I find the best way
            of learning is by doing. The idea of a social media came to me while
            reading about the origins of{' '}
            <span className='highlight'> React.js </span>. a Frontend framework
            created and maintained by{' '}
            <span className='highlight'> Facebook </span> the biggest social
            media site of them all.{' '}
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
              <p>Redux</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>Express.js</p>
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
              <p>MongoDB</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>NodeMon</p>
            </li>
          </ul>
        </div>
        <div className='project-features'>
          <h4> Features:</h4>
          <ul className='tech-list'>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>User Authentication</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>Fully responsive design for mobile and pc</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>Password encryption</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>Create your own unique profile</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>
                Add a{' '}
                <a
                  href='http://en.gravatar.com/'
                  target='__blank'
                  rel='noopener noreferrer'
                  className='link'
                >
                  gravatar
                </a>{' '}
                to your profile
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDevConnector;
