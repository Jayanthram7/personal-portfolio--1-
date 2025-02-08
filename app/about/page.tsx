"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Navbar } from "@/components/Navbar"

const skills = ["Deep Learning", "Machine Learning", "Artificial Intelligence", "NLP", "Gen AI"]

const techStack = [
  { name: "React", logo: "https://reactjs.org/logo-og.png" },
  { name: "MongoDB", logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" },
  { name: "Express", logo: "https://expressjs.com/images/express-facebook-share.png" },
  { name: "Node.js", logo: "https://nodejs.org/static/images/logo-hexagon-card.png" },
  { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  {
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
  },
  { name: "Google Firebase", logo: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_white.png" },
  { name: "PostgreSQL", logo: "https://www.postgresql.org/media/img/about/press/elephant.png" },
  { name: "Hadoop", logo: "https://hadoop.apache.org/hadoop-logo.jpg" },
  { name: "PyTorch", logo: "https://pytorch.org/assets/images/pytorch-logo.png" },
  { name: "TensorFlow", logo: "https://www.tensorflow.org/images/tf_logo_social.png" },
  { name: "Java", logo: "https://dev.java/assets/images/java-logo-vert-blk.png" },
  { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" },
  { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
]

export default function AboutMe() {
  const [showSecondText, setShowSecondText] = useState(false)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showSecondText && mainContentRef.current) {
      const yOffset = -110
      const y = mainContentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }, [showSecondText])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="relative w-full h-[40vh] sm:h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jayanth4-JHQyVa8yivCSVrWwaeYndscdYjQc36.png"
          alt="Scenic view with person on balcony"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <Navbar />
      </div>

      <main
        ref={mainContentRef}
        className="flex-1 container rounded-3xl px-4 sm:px-16 py-8 -mt-24 relative z-10 bg-white dark:bg-gray-800 dark:text-white"
      >
        <div className="flex flex-col justify-center items-center relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold mb-4 text-center"
          >
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">Jayanth</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: showSecondText ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl mb-4">Well, here&apos;s a few things about me:</h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg mb-8">
              I&apos;m a passionate developer and designer with a keen eye for creating amazing digital experiences. My
              journey in tech has been driven by curiosity and a desire to build innovative solutions. When I&apos;m not
              coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a
              good cup of coffee while brainstorming my next big idea.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-md border border-gray-100 transition-all duration-300 hover:border-green-500"
                >
                  <h3 className="text-sm sm:text-lg font-semibold text-black dark:text-white">{skill}</h3>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tech Stack & Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md flex flex-col items-center justify-center border border-gray-100 transition-all duration-300 hover:border-green-500"
                >
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-center text-black dark:text-white">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>

      <footer className="py-6 border-t dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2025 Jayanth Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

