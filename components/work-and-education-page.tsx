export function WorkAndEducationPage() {
  return (
    <div className="page-content">
      <h1 className="tittle">Work Experience</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2021 - 2023"}
          </span>
          <h3>{"Prefeitura de Jaboatão dos Guararapes"}</h3>
          <p>
            {
              "Projeto na Secretaria de Educação: Auxiliando no Desenvolvimento de Softwares e suporte aos usuários do sistema, segurança de sistemas e dando apoio na construção e manutenção de banco de dados e rede."
            }
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2024 - 2025"}
          </span>
          <h3>{"Desenvolvedor Back-end"}</h3>
          <p>
            {
              "Projeto de desenvolvimento de software, criando um sistema de gerenciamento de clientes e funcionários, utilizando nestjs, react, node.js e mongodb."
            }
          </p>
        </div>
      </div>

      <h1 className="tittle" style={{ marginTop: '1.5rem' }}>Education</h1>
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
    </div>
  )
}
