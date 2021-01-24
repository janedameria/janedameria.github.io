import Image from "./assets/myicon.png";
function Home() {
  return (
    <div id="home" className="home-container">
      <div className="welcome-container">
        <div className="title-container">
          <p>welcome</p>
        </div>
        <div className="welcome-body-container">
          <img className="me-icon" src={Image} alt="My Icon" />
          <h3 className="name">Jennifer Dameria</h3>
        </div>
      </div>

      <div className="about-links-container">
        <div className="about-container">
          <div className="title-container">
            <p>about me</p>
          </div>
          <div className="about-body-container">
            <p className="para-about">
              Hi! I'm Jennifer Dameria, a third-year Computer Science student at
              Bina Nusantara University.
            </p>
          </div>
        </div>

        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/jennifer-dameria/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in "></i>
          </a>
          <a
            href="https://github.com/janedameria"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://codepen.io/janedameria"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-codepen"></i>
          </a>
          <a href="mailto:jenniferhutabarat@gmail.com">
            <i className="far fa-envelope "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
