import { Navbar } from "@/components/Navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Resume
        </h1>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">JAYANTHRAM K</h2>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">SUMMARY</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Aspiring Artificial Intelligence and Machine Learning enthusiast also skilled in Full Stack Web
              Development (MERN). I'm keen on gaining expertise and committed to lifelong learning and development in
              the field of AI & ML. I am dedicated to hone my skills and upskill myself and eager to contribute to
              innovative projects.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">CONTACT</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Email: jayanthramnithin@gmail.com
              <br />
              Phone: 9965576297
              <br />
              Location: Coimbatore, Tamil Nadu
              <br />
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/jayanthram-k-j181104" className="text-blue-500 hover:underline">
                https://www.linkedin.com/in/jayanthram-k-j181104
              </a>
              <br />
              GitHub:{" "}
              <a href="https://github.com/Jayanthram7" className="text-blue-500 hover:underline">
                https://github.com/Jayanthram7
              </a>
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">EDUCATION</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>PSG College of Technology</strong>
              <br />
              BE. Computer Science and Engineering (AI & ML)
              <br />
              OCT 2022 - JUN 2026
              <br />
              CGPA up to 5th Semester: 7.95/10
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Deep Learning",
                "Artificial Intelligence",
                "Machine Learning",
                "NLP",
                "Generative AI",
                "PyTorch",
                "TensorFlow",
                "React.js",
                "Node.js",
                "Express.js",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Hadoop",
                "HTML 5",
                "CSS",
                "Bootstrap",
                "NumPy",
                "Matplotlib",
                "Pandas",
                "Scikit-learn",
                "Operating Systems",
                "Computer Networks",
                "Java",
                "Python",
                "C",
                "Git",
                "GitHub",
                "Graphic Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">PROJECTS</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I have worked on various projects including TallAi, Handwriting Recognition, and TripTactix.
            </p>
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </section>

          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">CERTIFICATIONS</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Generative AI (IIT Madras - Mechanica'24)</li>
              <li>Deep Learning with Python (IIT Madras - Mechanica'24)</li>
              <li>Artificial Intelligence and Machine Learning with Python (IIT Madras - Chemplus'24)</li>
              <li>Advance Machine Learning with Python (InternEzy Internship)</li>
              <li>Complete Web Development Bootcamp 2024 (Udemy)</li>
              <li>Frontend Developer - React (HackerRank), Front-End Development (Meta)</li>
              <li>Programming with JavaScript (Meta), Advanced SQL (HackerRank)</li>
              <li>Node, Python, C, Java (HackerRank)</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="w-full py-4 px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © 2025 Jayanth Studios. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#contact">
              Contact Me
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Twitter
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

