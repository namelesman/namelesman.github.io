export function EducationPage() {
  return (
    <>
      <h1 className="tittle">Education</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2021 - 2025"}
          </span>
          <h3>{"Faculdade de Boa viagem"}</h3>
          <p>
            {
              "Essa é a faculdade onde eu faço o bacharelado de Ciência da computação, pelo qual estou no momento no quinto periodo, em busca de novas experiências"
            }
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2023 - 2024"}
          </span>
          <h3>{"Curso de programação CS50 Harvard"}</h3>
          <p>
            {
              "Curso de programação CS50 Harvard, que me ensina a programar em Python, HTML, CSS, JavaScript, entre outros."
            }
          </p>
        </div>
      </div>
    </>
  )
}
