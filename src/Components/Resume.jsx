import React, { Component } from 'react';

import uuid from 'react-uuid';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>
              {education.degree} <span>&bull;</span>
              <em className='date'>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        let newDesc = work.description.split('\n');

        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className='info'>
              {work.title}
              <span>&bull;</span> <em className='date'>{work.years}</em>
            </p>
            <ul
              style={{
                marginLeft: '4px',
                listStyle: 'none',
              }}
            >
              {newDesc.map((desc) => (
                <li className='d-flex' key={uuid()}>
                  <i className='fas fa-minus link fa-sm mr-2 my-1'></i>{' '}
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      });
    }

    return (
      <section id='resume'>
        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{education}</div>
            </div>
          </div>
        </div>

        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{work}</div>
        </div>

        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className='columns main-col'>
            <section id='tech' className=''>
              <div className='container col-xm-4'>
                <div className='text-center'></div>
                <div className='row col-xm-4'>
                  <div className='col-md-2 col-xm-1 text-center'>
                    <img
                      src='/images/portfolio/phyton.png'
                      className='img-skill img-centered'
                      alt='phyton'
                    />
                    <span className='span'> Python</span>
                  </div>
                  <div className='col-md-2  text-center'>
                    <img
                      src='/images/portfolio/html.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> HTML</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/ruby.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='text-center'> Ruby</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/rails.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='text-center'> Rails</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/postSQL.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='text-center'> PostgreSQL</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/css.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> CSS</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <div className='container'>
                      <img
                        src='/images/portfolio/java.png'
                        className='img-skill img-centered'
                        alt=''
                      />
                      <span className='span'> Java</span>
                    </div>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/java-script.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> JavaScript</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/sql.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> SQL</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/c++.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> C++</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/react.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> React.js</span>
                  </div>
                  <div className='col-md-2 text-center'>
                    <img
                      src='/images/portfolio/express.png'
                      className='img-skill img-centered'
                      alt=''
                    />
                    <span className='span'> Express.js</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
