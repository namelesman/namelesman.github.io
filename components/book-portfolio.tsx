"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BookPortfolio() {
  const casingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const casing = casingRef.current;
    if (!casing) return;

    // Turn pages when clicking next or prev button
    const pageTurnBtns = casing.querySelectorAll<HTMLElement>(".nextprev-btn");

    pageTurnBtns.forEach((el, index) => {
      el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        if (!pageTurnId) return;
        const pageTurn = document.getElementById(pageTurnId);
        if (!pageTurn) return;

        if (pageTurn.classList.contains("turn")) {
          pageTurn.classList.remove("turn");
          setTimeout(() => {
            pageTurn.style.zIndex = String(20 - index);
          }, 500);
        } else {
          pageTurn.classList.add("turn");
          setTimeout(() => {
            pageTurn.style.zIndex = String(20 + index);
          }, 500);
        }
      };
    });

    // Contact me button click function
    const pages = casing.querySelectorAll<HTMLElement>(".book-page.page-right");
    const contactMeBtn = casing.querySelector<HTMLElement>(".btn.contact-me");

    if (contactMeBtn) {
      contactMeBtn.onclick = (event) => {
        event.preventDefault();
        pages.forEach((page, index) => {
          setTimeout(() => {
            page.classList.add("turn");
            setTimeout(() => {
              page.style.zIndex = String(20 + index);
            }, 500);
          }, (index + 1) * 200 + 100);
        });
      };
    }

    const totalPages = pages.length;
    let pageNumber = 0;

    function reverseIndex() {
      pageNumber--;
      if (pageNumber < 0) {
        pageNumber = totalPages - 1;
      }
    }

    // Back profile button click function
    const backProfileBtn = casing.querySelector<HTMLElement>(".back-profile");
    if (backProfileBtn) {
      backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
          setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");
            setTimeout(() => {
              reverseIndex();
              pages[pageNumber].style.zIndex = String(10 + index);
            }, 500);
          }, (index + 1) * 200 + 100);
        });
      };
    }

    // Opening animation
    const coverRight = casing.querySelector<HTMLElement>(".cover.cover-right");
    const pageLeft = casing.querySelector<HTMLElement>(".book-page.page-left");

    setTimeout(() => {
      coverRight?.classList.add("turn");
    }, 2100);

    setTimeout(() => {
      if (coverRight) coverRight.style.zIndex = "-1";
    }, 2800);

    setTimeout(() => {
      if (pageLeft) pageLeft.style.zIndex = "20";
    }, 3200);

    pages.forEach((_, index) => {
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove("turn");
        setTimeout(() => {
          reverseIndex();
          pages[pageNumber].style.zIndex = String(10 + index);
        }, 500);
      }, (index + 1) * 200 + 2100);
    });
  }, []);

  return (
    <div className="casing" ref={casingRef}>
      <div className="cover cover-left"></div>
      <div className="cover cover-right"></div>

      <div className="book">
        {/* Profile page */}
        <div className="book-page page-left">
          <div className="profile-page">
            <Image
              src="/Assets/image/me.jpg"
              alt="Thiago Medeiros"
              width={180}
              height={180}
              style={{ borderRadius: "50%" }}
            />
            <h1>Thiago Medeiros</h1>
            <h3>Dev Full stack</h3>

            <div className="social-media">
              <a
                href="https://github.com/namelesman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/thiago_sn_m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram-alt" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-medeiros-299b92140/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin" aria-hidden="true"></i>
              </a>
            </div>

            <p>
              {
                "Ol\u00e1, eu me chamo Thiago Medeiros, sou um desenvolvedor full-stack apaixonado por criar solu\u00e7\u00f5es web inovadoras e eficientes. Aproveitamos nossa ampla tecnologia e conhecimento de ferramentas para transformar ideias em aplica\u00e7\u00f5es pr\u00e1ticas e de alta qualidade. Meu foco \u00e9 construir experi\u00eancias digitais intuitivas, seguras e escal\u00e1veis, sempre atento aos detalhes e \u00e0s melhores pr\u00e1ticas de desenvolvimento."
              }
            </p>

            <div className="btn-box">
              <a
                href="/Curriculo-Thiago.pdf"
                download="Curriculo Thiago.pdf"
                target="_blank"
                className="btn"
              >
                Download CV
              </a>
              <a href="#" className="btn contact-me">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Page 1 & 2 */}
        <div className="book-page page-right turn" id="turn-1">
          {/* Page 1 - Work Experience */}
          <div className="page-front">
            <h1 className="tittle">Work Experience</h1>
            <div className="workeduc-box">
              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar" aria-hidden="true"></i>2021 - 2023
                </span>
                <h3>Prefeitura de Jaboat&atilde;o dos Guararapes</h3>
                <p>
                  {
                    "Foi um est\u00e1gio onde estava trabalhando no setor da Secretaria de Educa\u00e7\u00e3o: Auxiliando no Desenvolvimento de Softwares e suporte aos usu\u00e1rios do sistema, seguran\u00e7a de sistemas e dando apoio na constru\u00e7\u00e3o e manuten\u00e7\u00e3o de banco de dados e rede."
                  }
                </p>
              </div>
              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar" aria-hidden="true"></i>2023 - 2024
                </span>
                <h3>Desenvolvimento do My coffee</h3>
                <p>
                  {
                    "Projeto da faculdade em grupo, desenvolvemos um site interativo chamado meu caf\u00e9."
                  }
                </p>
              </div>
            </div>
            <span className="number-page">1</span>
            <span className="nextprev-btn" data-page="turn-1">
              <i className="bx bx-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

          {/* Page 2 - Education */}
          <div className="page-back">
            <h1 className="tittle">Education</h1>
            <div className="workeduc-box">
              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar" aria-hidden="true"></i>2021 - 2025
                </span>
                <h3>Faculdade de Boa viagem</h3>
                <p>
                  {
                    "Essa \u00e9 a faculdade onde eu fa\u00e7o o bacharelado de Ci\u00eancia da computa\u00e7\u00e3o, pelo qual estou no momento no quinto per\u00edodo, em busca de novas experi\u00eancias"
                  }
                </p>
              </div>
              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar" aria-hidden="true"></i>2023 - 2024
                </span>
                <h3>Desenvolvimento Site agata diesel</h3>
                <p>
                  {
                    "O meu projeto mais recente por\u00e9m ainda estou \u00e0 concluir, \u00e9 um website que pretendo por ao ar com o objetivo de ajudar a empresa agata diesel a vender os seus produtos"
                  }
                </p>
              </div>
            </div>
            <span className="number-page">2</span>
            <span className="nextprev-btn back" data-page="turn-1">
              <i className="bx bx-chevron-left" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        {/* Page 3 & 4 */}
        <div className="book-page page-right turn" id="turn-2">
          {/* Page 3 - My Services */}
          <div className="page-front">
            <h1 className="tittle">My Services</h1>
            <div className="services-box">
              <div className="services-content">
                <i className="bx bx-code-alt" aria-hidden="true"></i>
                <h3>Desenvolvimento Web</h3>
                <p>{"Farei um web site do jeito que voc\u00ea pedir"}</p>
                <a href="#" className="btn">
                  Leia Mais
                </a>
              </div>
            </div>
            <span className="number-page">3</span>
            <span className="nextprev-btn" data-page="turn-2">
              <i className="bx bx-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

          {/* Page 4 - My Skills */}
          <div className="page-back">
            <h1 className="tittle">My Skills</h1>
            <div className="skill-box">
              <div className="skills-content">
                <h3>Front-End</h3>
                <div className="content">
                  <span>
                    <i className="bx bxl-html5" aria-hidden="true"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-css3" aria-hidden="true"></i>CSS
                  </span>
                  <span>
                    <i className="bx bxl-javascript" aria-hidden="true"></i>JS
                  </span>
                  <span>
                    <i className="bx bxl-angular" aria-hidden="true"></i>Angular
                  </span>
                  <span>
                    <i className="bx bxl-react" aria-hidden="true"></i>React
                  </span>
                  <span>
                    <i className="bx bxl-git" aria-hidden="true"></i>Git
                  </span>
                  <span>
                    <i className="bx bxl-github" aria-hidden="true"></i>Github
                  </span>
                </div>
              </div>

              <div className="skills-content">
                <h3>Back-End</h3>
                <div className="content">
                  <span>
                    <i className="bx bxl-python" aria-hidden="true"></i>Python
                  </span>
                  <span>
                    <i className="bx bxl-nodejs" aria-hidden="true"></i>Node
                  </span>
                  <span>
                    <NestjsIcon />
                    Nestjs
                  </span>
                </div>
              </div>

              <div className="skills-content">
                <h3>Cyber-Security</h3>
                <div className="content">
                  <span>
                    <i className="fa-brands fa-linux" aria-hidden="true"></i>Linux
                  </span>
                </div>
              </div>
            </div>
            <span className="number-page">4</span>
            <span className="nextprev-btn back" data-page="turn-2">
              <i className="bx bx-chevron-left" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        {/* Page 5 & 6 */}
        <div className="book-page page-right turn" id="turn-3">
          {/* Page 5 - Latest Project */}
          <div className="page-front">
            <h1 className="tittle">Latest Project</h1>
            <div className="portfolio-box">
              <div className="img-box">
                <Image
                  src="/Assets/image/mycaffee.jpg"
                  alt="My Caffee project"
                  width={600}
                  height={240}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="info-box">
                <div className="info-tittle">
                  <h3>My Caffee</h3>
                  <a href="#">
                    Live Preview<i className="bx bx-link-external" aria-hidden="true"></i>
                  </a>
                </div>
                <p>Tech Used:</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  iure aliquam deserunt iusto dolorum nostrum quae. In, officia
                  ipsam!
                </p>
              </div>
              <div className="btn-box">
                <a
                  href="https://github.com/FrancisLauriano/meu_cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Source Code
                </a>
                <a
                  href="https://github.com/namelesman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  More Project
                </a>
              </div>
            </div>
            <span className="number-page">5</span>
            <span className="nextprev-btn" data-page="turn-3">
              <i className="bx bx-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

          {/* Page 6 - Contact Me */}
          <div className="page-back">
            <h1 className="tittle">Contact Me!</h1>
            <div className="contact-box">
              <form
                action="https://formspree.io/f/xdknlqzj"
                method="POST"
              >
                <input
                  type="text"
                  className="field"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="field"
                  placeholder="E-mail Address"
                  required
                />
                <textarea
                  cols={30}
                  rows={10}
                  className="field"
                  placeholder="Your Message"
                  required
                ></textarea>
                <input type="submit" className="btn" value="Send Message" />
              </form>
            </div>
            <span className="number-page">6</span>
            <span className="nextprev-btn back" data-page="turn-3">
              <i className="bx bx-chevron-left" aria-hidden="true"></i>
            </span>
            <a href="#" className="back-profile">
              <p>Profile</p>
              <i className="bx bxs-user" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NestjsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.95 454.16">
      <path
        fill="#00abf0"
        fillRule="evenodd"
        d="M268.47,0a28.88,28.88,0,0,0-9.18,1.65A25.94,25.94,0,0,1,270.24,17c.11.82.35,1.41.47,2.23a12.84,12.84,0,0,1,.23,2.12c.47,10.36-2.71,11.66-4.94,17.78a25.13,25.13,0,0,0,1.65,23.2,13.78,13.78,0,0,0,1.41,2.59c-4.48-29.79,20.37-34.26,25-43.57.35-8.12-6.36-13.54-11.66-17.31a26,26,0,0,0-13.89-4Z"
      />
    </svg>
  );
}
