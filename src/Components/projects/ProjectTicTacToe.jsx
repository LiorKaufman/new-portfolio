import React from 'react';

const ProjectTicTacToe = () => {
  return (
    <div>
      <div className='project'>
        <div className='project-img'>
          <h3>Tic-Tac-Toe</h3>
          <div className={`project__display__poster`}>
            <img
              src='images/portfolio/tic-tac-toe.png'
              alt={`Project Thumbnail`}
              className='img-fit'
            />
          </div>
          <div className='project-options'>
            <a
              className='m-2'
              href='https://tic-tac-toe-react-lior.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-desktop m-1 link'></i>
              <span className='link'>Live Preview</span>
            </a>
            <a
              className='m-2'
              href='https://github.com/LiorKaufman/Tic-Tac-Toe-React'
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
            The classic <span className='highlight'> Tic-Tac-Toe </span> game
            built using <span className='highlight'>React</span>
            and some <span className='highlight'> Bootstrap </span> to give it
            some color . I decided to add to it some special features such has
            leting you undo your last move.
          </p>
          <h5>Project Difficulties</h5>
          <p>
            Figuring out how to enable the user to{' '}
            <span className='hightlight'>undo a move </span> took me some time.
            I eventually found an elegant way to keep all the "moves" a player
            makes <span className='highlight'> into an array </span> and saving
            the last move as the last element of that array.
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
      </div>
    </div>
  );
};

export default ProjectTicTacToe;
