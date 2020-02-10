import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });

    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {/*<p>{skillmessage}</p>*/}
            <section id="tech" className="clients">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading"></h2>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/phyton.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    <span className="span"> Python</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/html.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    <span className="span"> HTML</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/ruby.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    <span className="text-center"> Ruby</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                          src="/images/portfolio/rails.png"
                          className="img-responsive img-centered"
                          alt=""
                      />
                      <span className="text-center"> Rails</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                          src="/images/portfolio/postSQL.png"
                          className="img-responsive img-centered"
                          alt=""
                      />
                      <span className="text-center"> PostgreSQL</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/css.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span className="span"> CSS</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/java.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span className="span"> Java</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/java-script.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span className="span"> JavaScript</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/sql.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span className="span"> SQL</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/c++.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span className="span"> C++</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/react.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span className="span"> React</span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 text-center">
                    <div className="container">
                      <img
                        src="/images/portfolio/jest.jpg"
                        className="img-responsive img-centered"
                        alt=""
                      />
                      <span> Jest </span>
                    </div>
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
