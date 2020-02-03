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
      var skills = this.props.data.skills.map(function(skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
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
            <p>{skillmessage}</p>

            {/*<div className="bars">*/}
            {/*  <ul className="skills">{skills}</ul>*/}
            {/*</div>*/}
            {/*<img*/}
            {/*  className="skill-icons"*/}
            {/*  src="/images/portfolio/ruby.png"*/}
            {/*></img>*/}
            {/*<img*/}
            {/*  className="skill-icons"*/}
            {/*  src="/images/portfolio/phyton.png"*/}
            {/*></img>*/}
            {/*<img*/}
            {/*  className="skill-icons"*/}
            {/*  src="/images/portfolio/java.png"*/}
            {/*></img>*/}
            {/*<img*/}
            {/*  className="skill-icons"*/}
            {/*  src="/images/portfolio/html5.png"*/}
            {/*></img>*/}
            {/*<img*/}
            {/*  className="skill-icons"*/}
            {/*  src="/images/portfolio/css.png"*/}
            {/*></img>*/}
            <section id="tech" className="clients">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading"></h2>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/phyton.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/html.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/ruby.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/css.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/java.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/java-script.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/sql.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/c++.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/react.png"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-6">
                    <a href="#portfolio">
                      <img
                        src="/images/portfolio/jest.jpg"
                        className="img-responsive img-centered"
                        alt=""
                      />
                    </a>
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
