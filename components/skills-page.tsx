export function SkillsPage() {
  return (
    <>
      <h1 className="tittle">My Skills</h1>
      <div className="skill-box">
        <div className="skills-content">
          <h3>Front-End</h3>
          <div className="content">
            <span>
              <i className="bx bxl-javascript" />
              JS
            </span>
            <span>
              <i className="bx bxl-angular" />
              Angular
            </span>
            <span>
              <i className="bx bxl-react" />
              React
            </span>
            <span>
              <i className="bx bxl-git" />
              Git
            </span>
          </div>
        </div>

        <div className="skills-content">
          <h3>Back-End</h3>
          <div className="content">
            <span>
              <i className="bx bxl-python" />
              Python
            </span>
            <span>
              <i className="bx bxl-nodejs" />
              Node
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.95 454.16">
                <title>nestjs-icon</title>
                <path
                  className="a"
                  d="M268.47,0a28.88,28.88,0,0,0-9.18,1.65A25.94,25.94,0,0,1,270.24,17c.11.82.35,1.41.47,2.23a12.84,12.84,0,0,1,.23,2.12c.47,10.36-2.71,11.66-4.94,17.78a25.13,25.13,0,0,0,1.65,23.2,13.78,13.78,0,0,0,1.41,2.59c-4.48-29.79,20.37-34.26,25-43.57.35-8.12-6.36-13.54-11.66-17.31a26,26,0,0,0-13.89-4Z"
                />
              </svg>
              Nestjs
            </span>
          </div>
        </div>

        <div className="skills-content">
          <h3>Cyber-Security</h3>
          <div className="content">
            <span>
              <i className="fa-brands fa-linux" />
              Linux
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
