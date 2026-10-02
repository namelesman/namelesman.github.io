"use client"

import { useEffect } from "react"
import {
  getSheetCount,
  goToSheet,
  isTypingTarget,
  markBookReady,
  nextSheet,
  prevSheet,
  sheetFromHash,
  TURN_TRANSITION,
} from "../lib/book"

export function BookInteractions() {
  useEffect(() => {
    const pages = Array.from(document.querySelectorAll<HTMLElement>(".book-page.page-right"))
    const coverRight = document.getElementById("cover-right")
    const pageLeft = document.getElementById("page-left")
    const timers: ReturnType<typeof setTimeout>[] = []
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms))

    // Botões de virar página: o da frente avança para a folha seguinte, o de trás volta para esta
    document.querySelectorAll<HTMLElement>(".nextprev-btn").forEach((btn) => {
      const sheet = pages.findIndex((page) => page.id === btn.dataset.page)
      btn.onclick = () => goToSheet(btn.classList.contains("back") ? sheet : sheet + 1)
    })

    const contactMeBtn = document.getElementById("contact-me-btn")
    if (contactMeBtn) {
      contactMeBtn.onclick = (e) => {
        e.preventDefault()
        goToSheet(getSheetCount())
      }
    }

    const backProfileBtn = document.getElementById("back-profile")
    if (backProfileBtn) {
      backProfileBtn.onclick = (e) => {
        e.preventDefault()
        goToSheet(0)
      }
    }

    // Animação de abertura: a capa vira e as páginas (que começam viradas) voltam uma a uma
    const OPEN_AT = 2100
    later(() => coverRight?.classList.add("turn"), OPEN_AT)
    later(() => {
      if (coverRight) coverRight.style.zIndex = "-1"
    }, OPEN_AT + 700)
    later(() => {
      if (pageLeft) pageLeft.style.zIndex = "20"
    }, OPEN_AT + 1100)

    const reversed = pages.map((page, index) => ({ page, index })).reverse()
    reversed.forEach(({ page, index }, step) => {
      later(() => {
        page.classList.remove("turn")
        later(() => {
          page.style.zIndex = String(20 - index)
        }, 500)
      }, OPEN_AT + (step + 1) * 200)
    })

    later(() => {
      markBookReady()
      const target = sheetFromHash(location.hash)
      if (target !== null) goToSheet(target, { updateHash: false })
    }, OPEN_AT + reversed.length * 200 + TURN_TRANSITION + 200)

    function onKeyDown(e: KeyboardEvent) {
      if (e.altKey || e.ctrlKey || e.metaKey || isTypingTarget(e.target)) return
      if (document.querySelector(".speechWindow, [cmdk-dialog]")) return
      if (e.key === "ArrowRight") nextSheet()
      else if (e.key === "ArrowLeft") prevSheet()
    }

    function onHashChange() {
      const target = sheetFromHash(location.hash)
      if (target !== null) goToSheet(target, { updateHash: false })
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("hashchange", onHashChange)

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return null
}
