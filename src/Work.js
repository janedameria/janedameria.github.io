import Project1Image from "./assets/Project1.png";
import Project2Image from "./assets/Project2.png";
import Footer from "./Footer";
function Work() {
  return (
    <>
      <div id="work" className="section-container">
        <h2 className="title">Work</h2>
        <p>
          Here are the several personal projects that I built in my spare time
          or my school projects to sharpen up my skill.
        </p>

        <div className="all-work-container">
          <div className="one-work-container">
            <div className="img-work-container">
              <img src={Project1Image} alt="Project1" />
            </div>
            <div className="body-work-container">
              <h4>Interval Timer</h4>
              <p>Html, CSS, Javascript</p>
              <div className="work-links-container">
                <a
                  href="https://github.com/janedameria/interval-timer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://intervaltitmer.netlify.Work/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="one-work-container">
            <div className="img-work-container">
              <img src={Project2Image} alt="Project2" />
            </div>
            <div className="body-work-container">
              <h4>Beeflix</h4>
              <p>PHP, Laravel</p>
              <div className="work-links-container">
                <a
                  href="https://github.com/janedameria/beeflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="http://beeflixmyproject.herokuWork.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Work;
