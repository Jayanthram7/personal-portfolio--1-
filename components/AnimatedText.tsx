"use client"

import type React from "react"
import { useState, useEffect } from "react"

const AnimatedText: React.FC = () => {
  const [text, setText] = useState("My Portfolio")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const words = ["My Portfolio ", "Jayanth Studios. "]

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    const fullText = words[index]
    let timer: NodeJS.Timeout

    if (isDeleting) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1)
      }, typingSpeed)
    } else {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
    }

    if (!isDeleting && charIndex === fullText.length) {
      setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, index, typingSpeed])

  const gradientClass =
    index === 0
      ? "bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500" // Aurora colors with minimal blue for "My Portfolio"
      : "bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400" // Same gradient for "Jayanth Studios"

  return (
    <h1 className="text-3xl font-bold tracking-tighter sm:text-[2rem] xl:text-[3.2rem]/none">
      Welcome to{" "}
      <span className={`text-transparent bg-clip-text ${gradientClass}`}>{words[index].substring(0, charIndex)}</span>
      <span className="inline-block w-[3px] h-[0.7em] ml-3 bg-pink-500" style={{ opacity: showCursor ? 1 : 0 }}></span>
    </h1>
  )
}

export default AnimatedText

