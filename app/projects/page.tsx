"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import TallAi from "@/app/projects/TallAi.png"

interface Project {
  id: number
  title: string
  fullDescription: string
  techStack: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "TallAi",
    fullDescription:
      "TallAi automates invoice processing and call center management. Using OCR and pdfplumber, it extracts data from invoices and converts it into a predefined Excel format. The call center automates data entry, assigns calls to employees, and tracks call statuses. This streamlines workflows, reduces manual errors, and improves operational efficiency.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "OCR", "pdfplumber"],
    image: "/TallAi.png",
    link: "https://example.com/tallai",
  },
  {
    id: 2,
    title: "IPL Quiz",
    fullDescription:
      "Test your IPL knowledge with our exciting IPL Quiz! Challenge yourself with questions about teams, players, records, and historic moments from the Indian Premier League. Whether you're a casual fan or a cricket expert, this quiz will keep you engaged and entertained. Play now and see how well you know the IPL!",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    image: "/Ipl.png",
    link: "https://iplquiz-jayanthstudios.netlify.app/",
  },
  {
    id: 3,
    title: "Chart Generator",
    fullDescription:
      "Chart Generator is a powerful tool that allows users to create a wide variety of customizable charts and graphs. It supports multiple chart types, data import from various sources, and export options in different formats. The intuitive interface makes it easy for both beginners and advanced users to create professional-looking visualizations.",
    techStack: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300",
    link: "https://v0-next-js-charts-jikzd8zeied-jhegnp.vercel.app/",
  },
  {
    id: 4,
    title: "Pdf Animator",
    fullDescription:
      "Pdf Animator is an innovative tool that brings static PDF documents to life. It allows users to add realistic page-turning animations and sound effects, creating an immersive book-like experience. The tool is perfect for digital publications, e-books, and interactive presentations, enhancing user engagement and reading experience.",
    techStack: ["JavaScript", "PDF.js", "Web Audio API", "HTML5 Canvas"],
    image: "/placeholder.svg?height=200&width=300",
    link: "https://flipbook-soundscape.lovable.app/",
  },
  {
    id: 5,
    title: "Bill Invoice Extractor",
    fullDescription:
      "Bill Invoice Extractor is an advanced AI-powered tool designed to automate the process of extracting relevant information from bill invoices. Using machine learning and computer vision techniques, it accurately identifies and extracts key data points such as invoice numbers, dates, item descriptions, quantities, and prices. This tool significantly reduces manual data entry, improves accuracy, and speeds up the invoice processing workflow.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
    image: "/placeholder.svg?height=200&width=300",
    link: "https://v0-bill-extractor-e9mjzu.vercel.app/",
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 dark:text-white text-center">Projects</h1>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold dark:text-white mb-4">{project.title}</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.fullDescription}</p>
                    <h3 className="text-lg font-semibold mb-2 dark:text-white">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-4 px-4 md:px-6 border-t bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © 2025 Jayanth Studios. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a className="text-xs hover:underline underline-offset-4" href="#contact">
              Contact Me
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Twitter
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

