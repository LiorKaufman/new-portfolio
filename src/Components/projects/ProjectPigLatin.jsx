import React from 'react';

const ProjectGlassTrack = () => {
  return (
    <div>
      <div className='project'>
        <div className='project-img'>
          <h3>Pig Latin Translator</h3>
          <div>
            <img
              src='images/portfolio/pig-latin.png'
              alt={`Project Thumbnail`}
              className='img-fit'
            />
          </div>
          <div className='project-options'>
            <a
              className='m-2'
              href='https://codepen.io/artilleryjoe/pen/rEXENW'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-desktop m-1 link'></i>
              <span className='link'>Live Preview</span>
            </a>
          </div>
        </div>
        <div className='project-desc'>
          <h4>Overview</h4>
          <p>
            If you ever wanted to translate your{' '}
            <span className='highlight'> life memoiers </span> in pig latin then
            my Pig Latin translator is here for you! Converts regular english
            words into awesome{' '}
            <span className='highlight'> pig latin words </span>
          </p>
        </div>
        <div className='project-tech'>
          <h4>Technologies Used</h4>
          <ul className='tech-list'>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>CSS3</p>
            </li>
            <li>
              <i className='fas fa-dot-circle link'></i>
              <p>HTML5</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectGlassTrack;
