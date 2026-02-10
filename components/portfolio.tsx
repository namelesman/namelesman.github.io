"use client"

import { ProfilePage } from "./profile-page"
import { WorkExperiencePage } from "./work-experience-page"
import { EducationPage } from "./education-page"
import { ServicesPage } from "./services-page"
import { SkillsPage } from "./skills-page"
import { PortfolioPage } from "./portfolio-page"
import { ContactPage } from "./contact-page"
import { BookInteractions } from "./book-interactions"
import { ParticlesBackground } from "./particles-background"

export function Portfolio() {
  return (
    <>
      <ParticlesBackground />

      <div className="casing">
        <div className="cover cover-left" />
        <div className="cover cover-right" id="cover-right" />

        <div className="book">
          {/* Profile page */}
          <div className="book-page page-left" id="page-left">
            <ProfilePage />
          </div>

          {/* Page 1 & 2 */}
          <div className="book-page page-right turn" id="turn-1">
            <div className="page-front">
              <WorkExperiencePage />
              <span className="number-page">1</span>
              <span className="nextprev-btn" data-page="turn-1">
                <i className="bx bx-chevron-right" />
              </span>
            </div>
            <div className="page-back">
              <EducationPage />
              <span className="number-page">2</span>
              <span className="nextprev-btn back" data-page="turn-1">
                <i className="bx bx-chevron-left" />
              </span>
            </div>
          </div>

          {/* Page 3 & 4 */}
          <div className="book-page page-right turn" id="turn-2">
            <div className="page-front">
              <ServicesPage />
              <span className="number-page">3</span>
              <span className="nextprev-btn" data-page="turn-2">
                <i className="bx bx-chevron-right" />
              </span>
            </div>
            <div className="page-back">
              <SkillsPage />
              <span className="number-page">4</span>
              <span className="nextprev-btn back" data-page="turn-2">
                <i className="bx bx-chevron-left" />
              </span>
            </div>
          </div>

          {/* Page 5 & 6 */}
          <div className="book-page page-right turn" id="turn-3">
            <div className="page-front">
              <PortfolioPage />
              <span className="number-page">5</span>
              <span className="nextprev-btn" data-page="turn-3">
                <i className="bx bx-chevron-right" />
              </span>
            </div>
            <div className="page-back">
              <ContactPage />
              <span className="number-page">6</span>
              <span className="nextprev-btn back" data-page="turn-3">
                <i className="bx bx-chevron-left" />
              </span>
              <a href="#" className="back-profile" id="back-profile">
                <p>Profile</p>
                <i className="bx bxs-user" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <BookInteractions />
    </>
  )
}
