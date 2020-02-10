import React, { Component } from "react";

class Portfolio extends Component {


  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
        var projectImage = "/images/portfolio/" + projects.image;
        return (

              <div key={projects.title} className="card" style={{minWidth: "200px", width: "20rem", height: "auto", minHeight:"250px", margin: "2rem"}}>
                <a href={projects.url} title={projects.title} >
                  <div className="card-header">
                    <h5 className="card-title text-center">{projects.title}</h5>

                  </div>
                  <img src={projectImage} className="card-img-top border" alt="..."/>

                  <div className="card-body">
                    <p className="card-text">{projects.category}</p>
                    <div className="card-footer text-muted">
                      {projects.tools}
                    </div>
                  </div>
                </a>
              </div>
        );
      });
    }


    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className= "d-flex justify-content-between flex-wrap"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
