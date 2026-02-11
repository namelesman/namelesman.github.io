"use client"

import { useEffect } from "react"

export function BookInteractions() {
  useEffect(() => {
    const pageTurnBtns = document.querySelectorAll<HTMLElement>(".nextprev-btn")
    const pages = document.querySelectorAll<HTMLElement>(".book-page.page-right")
    const contactMeBtn = document.getElementById("contact-me-btn")
    const backProfileBtn = document.getElementById("back-profile")
    const coverRight = document.getElementById("cover-right")
    const pageLeft = document.getElementById("page-left")

    // Page turn buttons
    pageTurnBtns.forEach((el, index) => {
      el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page")
        if (!pageTurnId) return
        const pageTurn = document.getElementById(pageTurnId)
        if (!pageTurn) return

        if (pageTurn.classList.contains("turn")) {
          pageTurn.classList.remove("turn")
          setTimeout(() => {
            pageTurn.style.zIndex = String(20 - index)
          }, 500)
        } else {
          pageTurn.classList.add("turn")
          setTimeout(() => {
            pageTurn.style.zIndex = String(20 + index)
          }, 500)
        }
      }
    })

    // Contact me button
    if (contactMeBtn) {
      contactMeBtn.onclick = (event) => {
        event.preventDefault()
        pages.forEach((page, index) => {
          setTimeout(() => {
            page.classList.add("turn")
            setTimeout(() => {
              page.style.zIndex = String(20 + index)
            }, 500)
          }, (index + 1) * 200 + 100)
        })
      }
    }

    // Back profile button
    const totalPages = pages.length
    let pageNumber = 0

    function reverseIndex() {
      pageNumber--
      if (pageNumber < 0) {
        pageNumber = totalPages - 1
      }
    }

    if (backProfileBtn) {
      backProfileBtn.onclick = (e) => {
        e.preventDefault()
        pages.forEach((_, index) => {
          setTimeout(() => {
            reverseIndex()
            pages[pageNumber].classList.remove("turn")
            setTimeout(() => {
              reverseIndex()
              pages[pageNumber].style.zIndex = String(10 + index)
            }, 500)
          }, (index + 1) * 200 + 100)
        })
      }
    }

    // Opening animation
    const coverTimer = setTimeout(() => {
      coverRight?.classList.add("turn")
    }, 2100)

    const coverZTimer = setTimeout(() => {
      if (coverRight) coverRight.style.zIndex = "-1"
    }, 2800)

    const pageLeftTimer = setTimeout(() => {
      if (pageLeft) pageLeft.style.zIndex = "20"
    }, 3200)

    const pageTimers: ReturnType<typeof setTimeout>[] = []
    pages.forEach((_, index) => {
      const timer = setTimeout(() => {
        reverseIndex()
        pages[pageNumber].classList.remove("turn")
        setTimeout(() => {
          reverseIndex()
          pages[pageNumber].style.zIndex = String(10 + index)
        }, 500)
      }, (index + 1) * 200 + 2100)
      pageTimers.push(timer)
    })

    return () => {
      clearTimeout(coverTimer)
      clearTimeout(coverZTimer)
      clearTimeout(pageLeftTimer)
      pageTimers.forEach(clearTimeout)
    }
  }, [])

  return null
}
