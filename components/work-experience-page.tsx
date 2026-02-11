export function WorkExperiencePage() {
  return (
    <>
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
              "Foi um estagio onde estava trabalhando no setor da Secretaria de Educação: Auxiliando no Desenvolvimento de Softwares e suporte aos usuários do sistema, segurança de sistemas e dando apoio na construção e manutenção de banco de dados e rede."
            }
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year">
            <i className="bx bxs-calendar" />
            {"2024 - 2025"}
          </span>
          <h3>{"Desenvolvedor full stack em hollow soft"}</h3>
          <p>
            {
              "Fiz um projeto de desenvolvimento de software para a empresa hollow soft, onde desenvolvi um sistema de gerenciamento de clientes e funcionários, utilizando React, Node.js e MongoDB."
            }
          </p>
        </div>
      </div>
    </>
  )
}
