import React, { Component } from 'react';

// css effect
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-scroll';

// components
import ProjectGameOfLife from './projects/ProjectGameOfLife';
import ProjectGlassTrack from './projects/ProjectGlassTrack';
import ProjectTicTacToe from './projects/ProjectTicTacToe';
import ProjectDevConnector from './projects/ProjectDevConnector';
import ProjectShoppingList from './projects/ProjectShoppingList';
import ProjectPigLatin from './projects/ProjectPigLatin';

// helpers
import uuid from 'react-uuid';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ showMore: !this.state.showMore });
  }

  render() {
    // if (this.props.data) {
    //   const imgUrls = [
    //     'images/portfolio/rsz_game-of-life.png',
    //     'images/portfolio/glass.png',
    //     'images/portfolio/location-list.png',
    //     'images/portfolio/tic-tac-toe.png',
    //     'images/portfolio/pig-latin.png',
    //     'images/portfolio/shoppinglist.PNG',
    //     'images/portfolio/BrandLogo.PNG',
    //   ];
    // }

    const projectList = [
      <ProjectDevConnector />,
      <ProjectGlassTrack />,
      <ProjectGameOfLife />,
      <ProjectShoppingList />,
      <ProjectTicTacToe />,
      <ProjectPigLatin />,
    ];

    const numberOfProjects = this.state.showMore ? projectList.length : 3;

    return (
      <section id='portfolio'>
        <h1>Check Out Some of My Works.</h1>
        <div className='container'>
          <TransitionGroup>
            {projectList.slice(0, numberOfProjects).map((project) => {
              return (
                <CSSTransition key={uuid()} timeout={500} classNames='fade'>
                  <li
                    style={{
                      listStyle: 'none',
                    }}
                  >
                    {project}
                    <hr style={{ borderBottom: '2px solid black' }} />
                  </li>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
          <Link
            to={this.state.showMore ? 'project3' : 'project4'}
            smooth={true}
            spy={true}
            duration={1000}
            delay={this.state.showMore ? 600 : 1000}
            ignoreCancelEvents={true}
          >
            <button
              onClick={(e) => this.handleClick(e)}
              className='btn btn-success'
              style={{ borderRadius: '40%' }}
            >
              {this.state.showMore ? (
                <i className='icon-up-open m-1'>Show Less...</i>
              ) : (
                <i className='icon-down-open m-1'>Show More...</i>
              )}
            </button>
          </Link>
          <p>
            <small>
              You can find even more of my projects on my github page
            </small>
          </p>
        </div>
      </section>
    );
  }
}

export default Portfolio;
