import React from 'react';

import { Element } from 'react-scroll';

const ProjectGameOfLife = () => {
  return (
    <div className='project'>
      <Element name='project3'></Element>
      <div className='project-img'>
        <h3>Game Of Life</h3>
        <div>
          <img
            src='images/portfolio/rsz_game-of-life.png'
            alt={`Project Thumbnail`}
            className='img-fit'
          />
        </div>
        <div className='project-options'>
          <a
            className='m-2'
            href='https://game-of-life-lk.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fas fa-desktop m-1 link'></i>
            <span className='link'>Live Preview</span>
          </a>
          <a
            className='m-2'
            href='https://github.com/LiorKaufman/game-of-life'
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
          The Game of Life, also known simply as Life, is a cellular automaton
          devised by the{' '}
          <span className='highlight'>
            British mathematician John Horton Conway in 1970
          </span>
          . It is a zero-player game, meaning that its evolution is determined
          by its initial state, requiring no further input. One interacts with
          the <span className='highlight'> Game of Life </span> by creating an
          initial configuration and observing how it evolves.
          <span className={`highlight`}> Wikipedia</span>
        </p>
        <h5>Project difficulties</h5>
        <p>
          This was my first time dealing with{' '}
          <span className='highlight'>Animation</span> in React. I had to
          research what are the best ways to re render state in an{' '}
          <span className='highlight'> optimized way </span> while also taking
          into account the user input mid animation.
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
            <p>Immer</p>
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
        </ul>
      </div>
      <div className='project-features'>
        <h4> My solution:</h4>
        <p>
          <span className='highlight'> Immer</span>, a package that lets you
          work with immutable state. Thus allowing me to check my grid array and
          decide what part of the state needed updating.
        </p>
      </div>
      <Element name='project4'></Element>
    </div>
  );
};

export default ProjectGameOfLife;
