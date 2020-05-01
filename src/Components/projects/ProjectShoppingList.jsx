import React from 'react';

const ProjectShoppingList = () => {
  return (
    <div className='project'>
      <div className='project-img'>
        <h3>To do list</h3>
        <div>
          <img
            src='images/portfolio/shoppinglist.PNG'
            alt='Project Thumbnail'
            className='img-fit'
          />
        </div>
        <div className='project-options'>
          <a
            className='m-2'
            href='https://hidden-wave-94604.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fas fa-desktop m-1 link'></i>
            <span className='link'>Live Preview</span>
          </a>
          <a
            className='m-2'
            href='https://github.com/LiorKaufman/ShoppingList'
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
          My <span className='highlight'>first </span>
          app using the <span className='highlight'> MERN </span>stack, a basic
          To-Dolist app built in order to famiralize myself with
          <span className='highlight'> Express.js.</span>
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
    </div>
  );
};

export default ProjectShoppingList;
